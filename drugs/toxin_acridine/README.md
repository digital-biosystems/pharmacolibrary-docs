<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Food toxins&quot;,&quot;href&quot;:&quot;toxins/FOOD.md&quot;},{&quot;label&quot;:&quot;Acridine&quot;}]"></div>

# Acridine

- **generic name:** Acridine
- **T3DB:** [T3D0633](http://www.t3db.ca/toxins/T3D0633) · **PubChem:** [CID 9215](https://pubchem.ncbi.nlm.nih.gov/compound/9215)

## About

Acridine is one of over 100 different polycyclic aromatic hydrocarbons (PAHs). PAHs are chemicals that are formed during the incomplete burning organic substances, such as fossil fuels. They are usually found as a mixture containing two or more of these compounds.

- **Category:** Pollutant, Food Toxin, Natural Toxin
- **Route of exposure:** oral, inhalation
- **Sources and uses:** PAHs are released into the environment via the combustion of fossil fuels, coke oven emissions and vehicle exhausts, as well as naturally from forest fires and vocanic eruptions. PAHs from these sources may contaminate nearly water systems. …
- **Mechanism of toxicity:** The ability of PAH's to bind to blood proteins such as albumin allows them to be transported throughout the body. Many PAH's induce the expression of cytochrome P450 enzymes, especially CYP1A1, CYP1A2, and CYP1B1, by binding to the aryl hydrocarbon receptor or glycine N-methyltransferase protein. …
- **Health effects:** PAHs are carcinogens and have been associated with the increased risk of skin, respiratory tract, bladder, stomach, and kidney cancers. They may also cause reproductive effects and depress the immune system.
- **Carcinogenicity:** Not listed by IARC. …
- **Acute toxicity:** LD50: 400 mg/kg (Subcutaneous, Mouse); LD50: 500 mg/kg (Oral, Mouse); LD50: 100 mg/kg (Intravenous, Rabbit)
- **Treatment:** There is no know antidote for PAHs. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D0633">T3DB T3D0633</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 260-94-6 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:36420">ChEBI 36420</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="other animal" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Davis_1981_reference](drugs/toxin_acridine/Acridine_Davis1981_reference.md) | — | 1-compartment (no model) | 0 | Davis KR et al., Toxic and teratogenic effects of select…, Archives of environmental c… (1981) | [10.1007/BF01055639](https://doi.org/10.1007/BF01055639) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Lacher_2014_IC50](drugs/toxin_acridine/pd_Lacher_2014_IC50.md) | cytotoxicity ← acridine · inhibition effect | — | Lacher SE et al., Absence of P-glycoprotein transport in…, The Journal of pharmacology… (2014) | [10.1124/jpet.113.209791](https://doi.org/10.1124/jpet.113.209791) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-16 15:29 | 2:33:23 | 0/1/0 | 1/0/0 | 0/0/0 | 2,177,043/116,204 | einfracz / qwen3.8-flash-next | 47 | 10/36 | 45/2 | 0 |

## Coverage

- **PubMed hits:** 325 matched, 226 returned
- **screened:** 12  ·  **relevant:** 7
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_10 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Paxton_1992.pdf` | Paxton JW et al., Pharmacokinetics and toxicity of the an…, Cancer chemotherapy and pha… (1992) | popPK | 10 | [10.1007/BF00686007](https://doi.org/10.1007/BF00686007) | [1551177](https://pubmed.ncbi.nlm.nih.gov/1551177) | The paper reports specific pharmacokinetic parameters (clearance, Vss, half-lives) for the acridine derivative N-[2-(dimethylamino)ethyl]acridine-4-carboxamide (AC) in mice. |
| `Pigatto_2012.pdf` | Pigatto MC et al., Pre-clinical pharmacokinetics of the ac…, Xenobiotica; the fate of fo… (2012) | popPK | 9 | [10.3109/00498254.2011.654000](https://doi.org/10.3109/00498254.2011.654000) | [22313037](https://pubmed.ncbi.nlm.nih.gov/22313037) | The paper reports comprehensive quantitative toxicokinetic parameters (half-life, clearance, volume of distribution, tissue AUCs) for the acridine derivative AC04 and its metabolite in rats, with all values explicitly stated in the abstract. |
| `Van_1979.pdf` | Van Echo DA et al., Phase I clinical and pharmacological st…, Cancer research (1979) | popPK | 9 |  | [476624](https://pubmed.ncbi.nlm.nih.gov/476624) | The paper reports specific terminal half-lives (biphasic t1/2 values) for m-AMSA (an acridine derivative) in humans. |
| `Al-Salmy_2002.pdf` | Al-Salmy HS, Inter-strain variability in aldehyde ox…, Comparative biochemistry an… (2002) | popPK | 8 | [10.1016/s1532-0456(02)00057-1](https://doi.org/10.1016/s1532-0456(02)00057-1) | [12161167](https://pubmed.ncbi.nlm.nih.gov/12161167) | The paper reports quantitative kinetic parameters (Km, Vmax, intrinsic clearance) for acridine (as the substrate DACA) in mouse liver cytosol, representing in vitro metabolic kinetics. |
| `Jehn_1989.pdf` | Jehn U, New drugs in the treatment of acute and…, Bone marrow transplantation… (1989) | popPK | 8 |  | [2697402](https://pubmed.ncbi.nlm.nih.gov/2697402) | The text identifies acridine (as amsacrine/mAMSA) and states its plasma clearance is biphasic, but provides no numeric kinetic parameters or values in the provided abstract. |
| `Meikle_1998.pdf` | Meikle SR et al., Pharmacokinetic assessment of novel ant…, Cancer chemotherapy and pha… (1998) | popPK | 8 | [10.1007/s002800050804](https://doi.org/10.1007/s002800050804) | [9685053](https://pubmed.ncbi.nlm.nih.gov/9685053) | The paper reports pharmacokinetic findings for acridine carboxamide (a derivative) including volume of distribution and retention time in humans via PET, but specific numeric parameter values are not present in the abstract text provided, likely residing in full tables or figures. |
| `Davis_1981.pdf` | Davis KR et al., Toxic and teratogenic effects of select…, Archives of environmental c… (1981) | popPK | 7 | [10.1007/BF01055639](https://doi.org/10.1007/BF01055639) | [7259304](https://pubmed.ncbi.nlm.nih.gov/7259304) | The text provides quantitative kinetic data for acridine in Xenopus laevis larvae, specifically uptake rate/time to max level (1 hr) and depuration half-life parameters (70% loss in 45 min), which are extractable from the provided evidence. |
| `Giri_2008.pdf` | Giri N et al., Investigation of the role of breast can…, Drug metabolism and disposi… (2008) | pgx | 7 | [10.1124/dmd.108.020974](https://doi.org/10.1124/dmd.108.020974) | [18443033](https://www.ncbi.nlm.nih.gov/pubmed/18443033) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |
| `Wang_2008.pdf` | Wang L et al., N-(4-[2-(1,2,3,4-tetrahydro-6,7-dimetho…, Drug metabolism and disposi… (2008) | pgx | 7 | [10.1124/dmd.108.021980](https://doi.org/10.1124/dmd.108.021980) | [18799806](https://www.ncbi.nlm.nih.gov/pubmed/18799806) | metadata signals extractable PGX data (Abcg2, PK/PD-context) |
| `Pan_2007.pdf` | Pan G et al., Abcg2/Bcrp1 mediates the polarized tran…, Drug metabolism and disposi… (2007) | pgx | 5 | [10.1124/dmd.106.014274](https://doi.org/10.1124/dmd.106.014274) | [17437964](https://www.ncbi.nlm.nih.gov/pubmed/17437964) | metadata signals extractable PGX data (Abcg2) |

<sub>queue written 2026-11-16 13:50 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbasi_2019 | irrelevant | 1 | 2 | The paper focuses on enzyme kinetics (Km, velocity ratios) for aldehyde oxidase and acridine derivatives (specifically N-(2-dimethylamino)ethyl)acridine-4-carboxamide) in vitro, not parent acridine toxicokinetics. |
| popPK | Abouelenein_2024 | irrelevant | 1 | 0 | The paper focuses on the synthesis, in silico modeling, and in vitro bioactivity (antimicrobial/anticancer) of acridine derivatives, reporting no quantitative in vivo toxicokinetic parameters. |
| popPK | Adjei_2002 | irrelevant | 2 | 0 | The paper studies pyrazoloacridine (an acridine derivative) not acridine itself, and mentions pharmacokinetics but provides no numeric values in the abstract. |
| popPK | Afzal_2016 | irrelevant | 1 | 0 | The paper is a review focusing on asulacrine, with acridine mentioned only as part of the chemical name (acridine portion), and provides no specific quantitative kinetic parameters for acridine itself. |
| popPK | Agus_2018 | irrelevant | 0 | 0 | Acridine appears only as a component of a staining dye (acridine orange) and the study substance is terpinolene. |
| popPK | Ahmad_2024 | irrelevant | 0 | 0 | The paper is about Rifabutin microparticles and macrophage autophagy, mentioning acridine only as a component of acridine orange stain (an analytical reagent), with no toxicokinetic data for acridine. |
| popPK | Al-Salmy_2001 | irrelevant | 2 | 8 | The paper reports kinetic parameters (Vmax, Km) for the enzyme aldehyde oxidase using a substituted acridine derivative (DACA) as a substrate in human liver cytosol, not for acridine itself in an organism, representing in vitro enzyme kinetics rather than toxicokinetics of acridine. |
| popPK | Albertini_1987 | irrelevant | 0 | 0 | Acridine is used only as a vital stain (acridine orange) and no kinetic parameters are reported. |
| PGx | An_2011 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with an inhibitor named GF120918, not an acridine drug, and involves no pharmacogenomic variables. |
| popPK | Appleton_1996 | irrelevant | 0 | 0 | Acridine is used only as an analytical stain (acridine orange) for histology, with no toxicokinetic parameters reported. |
| popPK | Arivalagan_2015 | irrelevant | 0 | 0 | Acridine is used merely as a staining reagent (acridine orange) in the cell death assay and is not the subject of toxicokinetic investigation. |
| popPK | Arulvasu_2014 | irrelevant | 0 | 0 | The paper studies silver nanoparticles, with acridine orange appearing only as a fluorescent dye for apoptosis staining, not as the subject of toxicokinetic analysis. |
| PGx | Augustin_2014 | not_relevant | 2 | 6 | The study investigates cellular metabolism and response in cell lines overexpressing an enzyme (CYP3A4) rather than comparing human genotypes/phenotypes to quantify pharmacokinetic or pharmacodynamic parameters. |
| popPK | Aydin-Schmidt_2013 | irrelevant | 0 | 0 | Acridine is mentioned only as a component of a staining solution (acridine orange) for microscopy, not as a subject of toxicokinetic analysis. |
| popPK | Azuma_2018 | irrelevant | 0 | 0 | The paper reports removal efficiency and partition coefficients in wastewater treatment systems, not biological toxicokinetic parameters in humans or animals. |
| PGx | Baguley_1981 | not_relevant | 0 | 0 | The paper discusses chemical structure-activity relationships (DNA binding, lipophilicity) affecting potency, but does not mention any genetic variants or pharmacogenomic factors. |
| popPK | Baguley_1995 | irrelevant | 0 | 0 | The paper discusses general pharmacokinetic principles and specific anti-cancer drugs like taxol, camptothecin, and DACA, but does not report any quantitative toxicokinetic parameters for the specific substance acridine. |
| popPK | Baguley_2021 | irrelevant | 1 | 1 | The paper is a narrative review of anticancer drug development (amsacrine, DACA, SN28049); the mention of a half-life refers to the derivative SN28049, not acridine itself, and acridine is not the subject of quantitative kinetic reporting. |
| PGx | Beeran_2015 | not_relevant | 0 | 0 | The paper discusses the cytotoxicity and MDR transporter inhibition of Elephantopus scaber extracts in cancer cells using Acridine Orange as a fluorescent stain, not as a drug with pharmacogenomic PK/PD analysis. |
| PGx | Beeran_2020 | not_relevant | 0 | 0 | The paper discusses a plant extract (Vernonia cinerea), not the drug acridine; the mention of "Acridine Orange" refers to a staining assay, not pharmacokinetic data of the drug acridine. |
| popPK | Berg_1991 | irrelevant | 2 | 9 | The substance studied is pyrazoloacridine, a chemical derivative, not acridine itself. |
| popPK | Biffl_1999 | irrelevant | 0 | 0 | Acridine appears only as part of the acridine orange dye used for staining, with no toxicokinetic parameters reported. |
| popPK | Black_1983 | irrelevant | 1 | 0 | The paper reports LC50 toxicity values rather than any quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Bloksma_1983 | irrelevant | 0 | 0 | Acridine appears only as the dye "acridine orange" used to measure phagocytosis in a study of immunomodulating agents, with no toxicokinetic parameters reported for acridine itself. |
| popPK | Boillot_2015 | irrelevant | 0 | 0 | Acridine is mentioned only as a metabolite of carbamazepine detected in the study, with no kinetic parameters reported for acridine itself. |
| PGx | Brand_2008 | not_relevant | 0 | 0 | The paper studies the citrus flavonoid hesperetin, not acridine; 'acridine' only appears in the chemical name of a standard inhibitor (GF120918), and no pharmacogenomic genotype-phenotype correlations are reported. |
| PGx | Caramelli_2006 | not_relevant | 0 | 0 | The paper discusses acridine derivatives in the context of prion disease pathogenesis but provides no pharmacogenomic data regarding PK or PD parameters linked to gene variants. |
| popPK | Cavalcanti_2025 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antimalarial efficacy of spiroacridine derivatives, reporting IC50 values against Plasmodium falciparum rather than quantitative toxicokinetic parameters for acridine. |
| popPK | Chen_2000 | irrelevant | 0 | 0 | Acridine appears only as part of a chemical name (GF120918) for an MDR antagonist; the paper studies Tc-tetrofosmin transport, not acridine toxicokinetics. |
| popPK | Chen_2005 | irrelevant | 0 | 0 | Acridine is used only as an internal standard in this topotecan pharmacokinetic study, with no kinetic parameters reported for acridine itself. |
| popPK | Chen_2012 | irrelevant | 0 | 0 | Acridine is used only as a chemical reagent (EASC) for derivatization, not as the subject substance; pharmacokinetic parameters are reported for salidroside and p-tyrosol. |
| popPK | Chen_2014 | irrelevant | 0 | 0 | The paper focuses on the antitumor agent SN 28049 and uses acridine-4-carboxamide (DACA) only as a structural comparator/analogue, reporting no quantitative toxicokinetic parameters for acridine itself. |
| PGx | Chi_2025 | not_relevant | 0 | 0 | The paper uses acridine orange as a cell staining reagent for apoptosis detection, not as a drug under pharmacokinetic or pharmacodynamic investigation. |
| popPK | Choi_2012 | irrelevant | 0 | 0 | Acridine appears only as a component of the staining agent acridine orange, with no toxicokinetic data for acridine itself. |
| popPK | Cholich_2024 | irrelevant | 0 | 0 | The paper focuses on Neltuma alpataco alkaloids (juliprosine/juliprosopine); acridine is only mentioned as a component of a staining dye (acridine orange), not as a subject of kinetic study. |
| PGx | Chow_2009 | not_relevant | 0 | 0 | The text is a review of dimer drug design and does not report any pharmacogenomic effects on PK/PD parameters. |
| popPK | Cristina_2024 | irrelevant | 3 | 0 | The paper describes the evaluation of a radioiodinated acridine orange derivative in cancer models but does not report quantitative kinetic parameters (e.g., clearance rates, half-lives, partition coefficients) in the provided text, only qualitative trends like 'fast blood clearance'. |
| popPK | Criswell_1998 | irrelevant | 0 | 0 | Acridine orange is used solely as a vital stain for flow cytometry and is not the substance under kinetic investigation; cyclophosphamide is the test compound. |
| PGx | Cummins_2002 | not_relevant | 0 | 0 | The text mentions "acridine" only as part of the chemical name of a P-gp inhibitor (GG918), not as the drug being studied, and the study involves drug-drug interactions rather than pharmacogenomic effects. |
| PGx | Cummins_2004 | not_relevant | 0 | 0 | The paper studies sirolimus and midazolam using an in vitro cell model; acridine appears only as part of a chemical inhibitor name (GG918), not as the drug being studied, and no gene variant effects on acridine PK/PD are reported. |
| popPK | Dallavalle_2020 | irrelevant | 1 | 0 | The paper is a review of multidrug resistance strategies where acridine is mentioned only as a chemical scaffold, with no kinetic parameters reported. |
| popPK | Dayal_2019 | irrelevant | 0 | 0 | The paper reports antibacterial activity and mutagenicity of acridine derivatives, not quantitative toxicokinetic parameters. |
| popPK | Deenathayalan_2024 | irrelevant | 0 | 0 | The paper studies zinc oxide nanoparticles in zebrafish; acridine is mentioned only as 'acridine orange', a staining reagent for apoptosis detection, with no kinetic data. |
| popPK | Dees_2003 | irrelevant | 2 | 1 | The paper studies pyrazoloacridine, a derivative, not acridine itself, and the provided evidence text contains no numerical kinetic values for acridine. |
| popPK | Deshmukh_2014 | irrelevant | 0 | 0 | The paper is a toxicology study on malaria hemoglobin degradation products (methemoglobin and beta-hematin) where acridine orange is used solely as an analytical dye/stain for apoptosis detection, with no kinetic parameters for acridine itself. |
| popPK | Deutsch-Wenzel_1983 | irrelevant | 0 | 0 | The paper reports carcinogenicity (tumor incidence) and dose-response data, but contains no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients. |
| popPK | Dey_2012 | irrelevant | 0 | 0 | Acridine appears only as a fluorescent stain (acridine orange) used for microscopic analysis, with no toxicokinetic parameters reported. |
| popPK | Dharmasivam_2025 | irrelevant | 0 | 0 | The paper is a review on lysosomal chemistry and anticancer drug mechanisms; acridine derivatives are mentioned only as design examples, with no quantitative toxicokinetic parameters reported for acridine itself. |
| popPK | Duangiad_2025 | irrelevant | 0 | 0 | Acridine appears only as a derivative dye (acridine orange) used as an analytical reagent to monitor enzyme activity, with no toxicokinetic parameters reported for acridine itself. |
| popPK | Duarte_2020 | irrelevant | 0 | 0 | The paper reports LD50 and antitumor efficacy of a spiro-acridine derivative (AMTAC-06) but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Dzampaeva_2026 | irrelevant | 0 | 0 | Acridine appears only as "acridine orange," a fluorescent dye used for staining cell nuclei in an in vitro assay, not as a subject of toxicokinetic study. |
| popPK | Ercanbrack_2024 | irrelevant | 0 | 0 | Acridine appears only as "acridine orange," a vital dye used as an analytical reagent for staining cell death, not as the subject of toxicokinetic investigation. |
| popPK | Evans_1992 | irrelevant | 0 | 0 | The substance studied is N-[2-(dimethylamino)ethyl]acridine-4-carboxamide (AC), an acridine derivative, not acridine itself. |
| popPK | Evenson_1985 | irrelevant | 0 | 0 | Acridine appears only as acridine orange dye used for flow cytometry staining of DNA/RNA, not as a subject of toxicokinetic study. |
| popPK | Evenson_1989 | irrelevant | 0 | 0 | Acridine appears only as acridine orange, a staining reagent for flow cytometry, not as the subject of a toxicokinetic study. |
| popPK | Faulkner-Jones_2003 | irrelevant | 0 | 0 | Acridine appears only as acridine orange, a staining reagent, and the reported half-life is for RNA in lens cells, not acridine kinetics. |
| popPK | Foster_1995 | irrelevant | 0 | 0 | The paper reports kinetic parameters for PZA (a synthetic pyrazoloacridine), not for the parent substance acridine, and acridine is merely part of the chemical name. |
| PGx | Franko_2025 | not_relevant | 2 | 1 | The paper describes the effect of a drug (acridine-based chalcone) on gene/protein expression of transporters, not how a human genetic variant affects the drug's pharmacokinetic or pharmacodynamic parameters. |
| popPK | Galanis_2005 | irrelevant | 4 | 1 | The paper focuses on pyrazoloacridine, a derivative, not acridine itself, and the provided evidence contains no numeric toxicokinetic parameters (only clinical outcomes and dose levels). |
| popPK | Garcia-Fossa_2024 | irrelevant | 0 | 0 | The paper uses acridine orange merely as a fluorescent dye for cellular imaging and does not report any toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for acridine. |
| popPK | Garcia-Fossa_2025 | irrelevant | 0 | 0 | Acridine orange is used merely as a fluorescent staining agent in an in vitro image-based assay; no toxicokinetic parameters for acridine are reported. |
| popPK | Garner_2008 | irrelevant | 0 | 0 | The paper focuses on the toxicokinetics of a different substance, DPC 333, where acridine is only mentioned as part of the chemical name of a P-gp inhibitor used as a comparator. |
| popPK | Ghosh_2023 | irrelevant | 0 | 0 | The paper is a review of environmental fate and ecotoxicity that mentions acridine only in the context of human carcinogenicity, providing no quantitative toxicokinetic parameters or half-lives for acridine in any organism. |
| popPK | Giełdanowski_1980 | irrelevant | 0 | 0 | The paper describes chronic toxicological effects and histopathology in rabbits but reports no quantitative toxicokinetic parameters. |
| PGx | Giri_2008 | not_relevant | 0 | 0 | The paper focuses on abacavir, zidovudine, and the transporter Bcrp1; 'acridine' is mentioned only as part of a chemical inhibitor's name (GF120918), not as the studied drug. |
| popPK | Gomha_2015 | irrelevant | 0 | 0 | The paper reports on the synthesis and cytotoxic activity of thiazole derivatives, with acridine appearing only as a component of the "acridine orange" dye used for cell staining, not as a subject of kinetic study. |
| popPK | Gong_2004 | irrelevant | 4 | 2 | The paper focuses on tacrine and its prodrug PTHA, with acridine appearing only as the structural core of the name, not as the subject of kinetic measurement. |
| popPK | Gonzalez-Rothi_1986 | irrelevant | 0 | 0 | Acridine orange is used solely as a fluorescent stain for the phagocytosis assay, with no toxicokinetic data or exposure data for acridine. |
| popPK | Gormley_1984 | irrelevant | 2 | 8 | The study reports on m-AMSA, which is described as an "acridine compound" but is a distinct chemical entity (4'-(9-acridinylamino)-methanesulfon-m-anisidide) from parent acridine, and the kinetic parameters are specific to this derivative. |
| popPK | Gu_2010 | irrelevant | 0 | 0 | The paper studies fenvalerate toxicity in zebrafish; acridine appears only as acridine orange, a fluorescent dye used for staining, with no toxicokinetic parameters reported for acridine itself. |
| popPK | Gupta_2022 | irrelevant | 0 | 0 | Acridine appears only as "acridine orange," a fluorescent dye used for cell staining, not as the toxicokinetic subject. |
| popPK | Haldane_1999 | irrelevant | 2 | 8 | The paper reports kinetic parameters (uptake/efflux rates, partition coefficients) for DACA (N-[2-(dimethylamino)ethyl]acridine-4-carboxamide), a derivative, not acridine itself. |
| popPK | Halicka_2017 | irrelevant | 0 | 0 | The provided evidence consists solely of a copyright/license agreement form from a university repository and contains no scientific text or toxicokinetic data. |
| popPK | Hall_1983 | irrelevant | 3 | 9 | The substance studied is amsacrine (NSC 249992), which is an acridine derivative but not the specific substance acridine, making the parameters non-transferable. |
| popPK | Han_2009 | irrelevant | 0 | 0 | Acridine appears only as part of "acridine orange," a histological staining reagent, with no toxicokinetic data reported. |
| popPK | Hashimoto_2004 | irrelevant | 0 | 0 | Acridine is used only as a component of the acridine orange dye in an apoptosis assay, not as a subject for toxicokinetic analysis. |
| popPK | Hicks_2001 | irrelevant | 4 | 2 | The paper focuses on a derivative (DACA/DAPA) rather than parent acridine, and specific numeric kinetic parameters are likely in figures/models not provided in the text. |
| popPK | Hoffmaster_2004 | irrelevant | 0 | 0 | The substance of interest is the peptide DPDPE; acridine appears only as a chemical descriptor within the full chemical name of the P-glycoprotein inhibitor GF120918. |
| PGx | Huang_2006 | not_relevant | 0 | 0 | The paper discusses Quinacrine metabolism and transport involving CYP3A4/5 and P-glycoprotein (MDR1 gene knockout), but Quinacrine is a quinoline derivative, not an acridine (acridine is mentioned only as part of the chemical name for a P-gp inhibitor used in the study, GG918). |
| popPK | Huang_2026 | irrelevant | 0 | 0 | Acridine is used as a scaffold/structural motif in radiotracer development, not as the substance for toxicokinetic analysis. |
| popPK | Hutchinson_2003 | irrelevant | 3 | 0 | The paper mentions the pharmacokinetics of DACA (an acridine derivative) but provides no numeric kinetic parameters for acridine itself in the provided text. |
| popPK | Imbert_2003 | irrelevant | 0 | 0 | Acridine appears only as a structural component in the chemical name of the efflux inhibitor GF120918; the study focuses on itraconazole pharmacokinetics, not acridine. |
| popPK | Jaeger_1987 | irrelevant | 0 | 0 | Acridine is mentioned only as a chemical class descriptor for quinacrine in a review of antimalarials, with no quantitative kinetic parameters provided. |
| popPK | Jayewardene_1997 | irrelevant | 1 | 0 | The paper describes an analytical HPLC method for a different substance, pyrazoloacridine, not acridine, and reports no kinetic parameters for acridine. |
| popPK | Jehn_1989 | relevant | 8 | 1 | The text identifies acridine (as amsacrine/mAMSA) and states its plasma clearance is biphasic, but provides no numeric kinetic parameters or values in the provided abstract. |
| popPK | Jensen_1985 | irrelevant | 0 | 0 | Acridine orange is used merely as a fluorescence stain/reagent, not as a subject of kinetic study; no kinetic parameters for acridine are reported. |
| popPK | Jiang_2019 | irrelevant | 0 | 0 | The paper is a proteomics study on Parkinson's disease cell models where acridine appears only as a component of Acridine Orange dye for apoptosis staining, with no kinetic data for the substance acridine. |
| popPK | Karagianis_1996 | irrelevant | 0 | 0 | The paper describes the synthesis and biological evaluation of porphyrin-bisacridine conjugates, not the toxicokinetic parameters of acridine itself. |
| popPK | Karim_2025 | irrelevant | 1 | 1 | The paper focuses on immunogenicity and antibody response to pathogen-reduced RBCs; acridine is used only as a surface marker/antigen, and while RBC lifespan/half-life is mentioned generally for RBCs, no quantitative toxicokinetic parameters for acridine disposition are reported. |
| popPK | Karuppaiah_2021 | irrelevant | 0 | 0 | Acridine is only present as a component of the acridine orange staining reagent, not as the subject of toxicokinetic investigation; the paper studies gemcitabine and silver nanoparticles. |
| popPK | Kestell_1999 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for DACA (N-[2-(dimethylamino)ethyl]acridine-4-carboxamide), an acridine derivative, not for acridine itself. |
| PGx | Kováčik_2014 | not_relevant | 0 | 0 | The text discusses environmental toxicology of 5-fluorouracil in algae, using Acridine Orange merely as a staining agent, not as a drug subject to pharmacogenomic analysis. |
| popPK | Krishnamoorthy_2024 | irrelevant | 0 | 0 | Acridine appears only as a component of acridine orange, a cellular staining reagent, not as the subject of toxicokinetic investigation; no kinetic parameters are reported. |
| popPK | Kulikova_2021 | irrelevant | 0 | 0 | The paper describes an electrochemical DNA sensor using acridine yellow as a reagent for detecting other drugs; no toxicokinetic parameters are reported. |
| popPK | Lacher_2014 | irrelevant | 0 | 0 | The paper focuses on paraquat kinetics, and acridine is mentioned only as part of the chemical name of a P-gp inhibitor (GF120918), with no kinetic data for acridine itself. |
| popPK | Lam_2004 | irrelevant | 0 | 0 | Acridine is only mentioned as part of the chemical name for the drug GG918, which serves as a comparator or inhibitor in a study on digoxin; no kinetic data for acridine itself is reported. |
| popPK | Lam_2006 | irrelevant | 0 | 0 | Acridine appears only as part of the chemical name of GG918, a tool compound, and the study focuses on erythromycin kinetics. |
| PGx | Larsen_1978 | not_relevant | 0 | 0 | The text mentions acridine dyes only as agents for plasmid curing in bacteria, not as a drug subject to pharmacogenomic analysis of PK/PD parameters. |
| popPK | Lee_1988 | irrelevant | 2 | 8 | The paper focuses on methotrexate kinetics and its interaction with mAMSA; mAMSA is the acridine derivative but no kinetic parameters for the acridine itself are reported, only its role as an inhibitor. |
| popPK | Li_2022 | irrelevant | 0 | 0 | Acridine is mentioned only as a component of an apoptosis staining assay (Acridine orange), with no kinetic parameters measured for acridine itself. |
| popPK | Lin_2014 | irrelevant | 0 | 0 | The paper is an immunology study on sepsis and T-cell autophagy; acridine orange is used solely as a fluorescent dye/staining reagent with no toxicokinetic parameters reported. |
| popPK | Liu_2013 | irrelevant | 0 | 0 | Acridine appears only as a component of the dye Acridine Orange used for staining, not as a substance with reported kinetic parameters. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The mention of "acridine" in the text refers to Acridine Orange/Ethidium Bromide (AO/EB) staining for apoptosis detection, not the drug acridine being studied; the paper focuses on epirubicin and melatonin without investigating acridine PK/PD effects relative to gene variants. |
| popPK | Lopes-Nunes_2020 | irrelevant | 0 | 0 | The paper focuses on an aptamer-drug delivery system where an acridine derivative (C8) is used as a ligand, but it reports no quantitative toxicokinetic parameters for acridine itself. |
| popPK | Luo_2023 | irrelevant | 0 | 0 | The paper focuses on Benomyl toxicity in zebrafish, and acridine is only mentioned as a component of Acridine Orange, a staining dye used as an analytical reagent. |
| PGx | Ma_2011 | not_relevant | 0 | 0 | The paper investigates acquired multidrug resistance (MDR) in a cell line induced by long-term Taxol exposure, where 'acridine' refers only to the dye acridine orange used for apoptosis staining, not as a pharmacological agent with a studied PK/PD profile influenced by gene variants. |
| popPK | Makhaeva_2025 | irrelevant | 0 | 0 | The paper reports in vitro enzyme inhibition IC50s for ferrocene derivatives containing acridine moieties, not toxicokinetic parameters for acridine itself. |
| PGx | Mayer_2007 | not_relevant | 0 | 0 | The study reports on an in vitro enzymatic assay for N-dealkylation activity but does not investigate the effect of human genetic variants (e.g., CYP2D6 polymorphisms) on pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Meikle_1998 | relevant | 8 | 2 | The paper reports pharmacokinetic findings for acridine carboxamide (a derivative) including volume of distribution and retention time in humans via PET, but specific numeric parameter values are not present in the abstract text provided, likely residing in full tables or figures. |
| popPK | Miura_1991 | irrelevant | 0 | 0 | Acridine appears only as acridine orange, a fluorescent stain used to visualize leukocytes, with no toxicokinetic parameters reported. |
| popPK | Miyoshi_1988 | irrelevant | 0 | 0 | Acridine appears only as acridine orange, an analytical stain for flow cytometry, with no toxicokinetic parameters reported. |
| popPK | Moraes-Lacerda_2025 | irrelevant | 0 | 0 | The paper is a laboratory protocol for live-cell imaging using acridine orange as a fluorescent dye, containing no toxicokinetic parameters or animal/human disposition data. |
| PGx | Mróz_2018 | not_relevant | 2 | 1 | The study investigates drug-drug interactions via UGT enzymes in vitro (microsomes/recombinant proteins) but does not analyze human genetic variants or genotype-phenotype relationships affecting PK/PD parameters in vivo. |
| popPK | Mukherjee_2019 | irrelevant | 0 | 0 | The paper studies azadirachtin effects on parasites; acridine is not mentioned or used as a subject substance, and no toxicokinetic parameters are present. |
| popPK | Murai_2003 | irrelevant | 0 | 0 | Acridine orange is mentioned only as a staining reagent for detecting apoptotic cells in an inflammation model, with no toxicokinetic parameters reported. |
| popPK | Mustafov_2025 | irrelevant | 0 | 0 | Acridine appears only as a component of a staining reagent (acridine orange) for apoptosis detection, not as the subject substance with toxicokinetic parameters. |
| PGx | Nakamura_2024 | not_relevant | 0 | 0 | The paper studies acridine orange as a fluorescent probe in an in vitro protein-binding assay to characterize AGP variants; it does not report human pharmacokinetic or pharmacodynamic data for acridine. |
| popPK | Nassr_2010 | irrelevant | 0 | 0 | Acridine (specifically acridine orange) is mentioned only as a staining reagent for detecting autophagy and is not the substance being studied for toxicokinetics. |
| popPK | Nedu_2020 | irrelevant | 0 | 0 | The paper is a review focusing on methylene blue and proflavine, mentioning acridine only as a chemical class descriptor without reporting any toxicokinetic parameters for acridine itself. |
| PGx | Niemira_2013 | not_relevant | 0 | 0 | The paper describes the induction of drug-metabolizing enzymes (CYP3A4/2C9) by acridine compounds via PXR signaling, but does not report how human gene variants (genotypes/phenotypes) alter the PK or PD of the acridines themselves. |
| popPK | Niesler_1998 | irrelevant | 0 | 0 | Acridine orange is used solely as a histological stain (analytical reagent), not as the subject of a toxicokinetic study, and no kinetic parameters are reported. |
| popPK | Nilkumhang_2009 | irrelevant | 0 | 0 | Acridine appears only as a model compound in a formulation study; no toxicokinetic parameters are reported. |
| popPK | Osman_1997 | irrelevant | 2 | 2 | The paper studies DACA (N-[2-(dimethylamino)ethyl]acridine-4-carboxamide), which is a distinct drug molecule containing an acridine moiety, not acridine itself. |
| popPK | Osman_2001 | irrelevant | 0 | 0 | The paper studies DACA (N-[2-(dimethylamino)ethyl]acridine-4-carboxamide), a complex acridine derivative, not acridine itself, and reports %ID/g tissue distributions rather than standard kinetic parameters like clearance or half-life for acridine. |
| popPK | Osman_2019 | irrelevant | 0 | 0 | The paper uses acridine orange solely as a topical staining agent for ex vivo microscopic imaging of neurosurgical specimens and reports no toxicokinetic parameters. |
| PGx | Pan_2007 | not_relevant | 0 | 0 | Paper studies ABC transporter Bcrp1 effects on antiretrovirals (abacavir/zidovudine); acridine is only mentioned as an inhibitor name (GF120918), not the drug of interest with reported PK/PD effects. |
| popPK | Pandey_2016 | irrelevant | 1 | 0 | The study reports pharmacodynamic and toxicological outcomes (LD50, efficacy) for a synthetic derivative, not quantitative toxicokinetic parameters (half-life, clearance, etc.) for acridine itself. |
| popPK | Papadopoulou_1994 | irrelevant | 0 | 0 | The paper reports on cytotoxicity, radiosensitization, and physicochemical properties (octanol/water partition) of a tetrahydroacridine derivative, but provides no toxicokinetic parameters (no rates, clearances, volumes, or half-lives) in whole organisms or systems. |
| popPK | Papadopoulou_1996 | irrelevant | 0 | 0 | The paper focuses on NLCPQ-1, not acridine; acridine is only mentioned in the context of previous studies/comparisons with no specific kinetic parameters for acridine reported here. |
| popPK | Patnaik_2015 | irrelevant | 0 | 0 | The paper concerns lead chloride and lead acetate toxicity; acridine appears only as part of a cell staining dye (acridine orange), not as a subject of toxicokinetic investigation. |
| popPK | Patnaik_2016 | irrelevant | 0 | 0 | Acridine appears only as a staining reagent (acridine orange) for cytotoxicity detection, not as the subject substance with toxicokinetic parameters. |
| popPK | Patnaik_2018 | irrelevant | 0 | 0 | The paper focuses on methylmercury toxicity and mentions acridine only as a component of an analytical dye (acridine orange), with no kinetic parameters for acridine. |
| popPK | Paxton_1986 | irrelevant | 0 | 0 | The paper reports kinetic parameters for amsacrine and its analogue CI-921, not for acridine itself; acridine is only mentioned as part of the chemical nomenclature. |
| popPK | Paxton_1993 | irrelevant | 2 | 9 | The paper reports pharmacokinetic parameters for the derivative N-[2-(dimethyl-amino)ethyl]acridine-4-carboxamide, not for the substance acridine itself. |
| PGx | Paxton_2005 | not_relevant | 0 | 0 | The paper investigates the chemical inhibition of CYP1A2 by acridine analogues on a different drug (DMXAA) using in vitro and molecular modeling methods; it does not analyze human genetic variants or pharmacogenomic effects on PK/PD parameters of acridines themselves. |
| popPK | Peng_2020 | irrelevant | 0 | 0 | The paper focuses on atherosclerosis mechanisms; acridine appears only as part of the stain name 'acridine orange', not as a toxicokinetic subject. |
| popPK | Persson_2020 | irrelevant | 0 | 0 | Acridine is used as acridine orange, a fluorescent analytical dye to measure lysosomal membrane permeabilization, and is not the subject of toxicokinetic investigation. |
| popPK | Petcharuttana_1989 | irrelevant | 0 | 0 | Acridine (as acridine orange) is used solely as a fluorescent staining reagent, and the paper reports no toxicokinetic parameters. |
| popPK | Petrera_2014 | irrelevant | 0 | 0 | Acridine is mentioned only as acridine orange, a staining reagent, with no kinetic parameters reported. |
| popPK | Pinheiro-Sousa_2019 | irrelevant | 0 | 0 | Acridine Orange is used only as a staining reagent for microscopy; no toxicokinetic data for acridine is reported. |
| popPK | Price_2003 | irrelevant | 0 | 0 | Acridine appears only as "acridine orange" mentioned in the background as a comparator assay for cell death, with no kinetic data reported. |
| popPK | Proctor_2008 | irrelevant | 0 | 0 | The paper focuses on metformin transport kinetics in Caco-2 cells; acridine appears only as a fragment within the chemical name of a P-glycoprotein inhibitor, not as the subject of toxicokinetic analysis. |
| popPK | Propper_2003 | relevant | 3 | 2 | The paper reports kinetic data for XR5000, an acridine derivative, rather than acridine itself, and only presents limited summary statistics (AUC) without detailed kinetic parameters. |
| popPK | Rajasinghe_2020 | irrelevant | 0 | 0 | Acridine appears only as part of the name of the dye acridine orange used for cell staining; the paper reports no toxicokinetic parameters for acridine itself. |
| popPK | Rajkumar_2026 | irrelevant | 0 | 0 | Acridine appears only as a component of an apoptosis stain (acridine orange/ethidium bromide), not as the substance with kinetic parameters. |
| PGx | Ramesh_2023 | not_relevant | 0 | 0 | The paper studies antifungal lipopeptides and mentions acridine orange only as a fluorescent dye for cell viability staining, with no pharmacogenomic context regarding acridine as a drug. |
| popPK | Ravichandiran_2024 | irrelevant | 0 | 0 | The paper focuses on the synthesis and anticancer activity of naphthoquinone derivatives, with acridine mentioned only as part of "acridine orange" dye for cell staining, not as a subject of toxicokinetic study. |
| popPK | Ringwald_1996 | irrelevant | 0 | 0 | The paper reports clinical efficacy and parasitological clearance for a malaria treatment trial, containing no toxicokinetic parameters or drug concentration measurements for acridine. |
| popPK | Rodrigo_2019 | irrelevant | 0 | 0 | The paper focuses on autophagy and mitochondrial function in leukemia cells, mentioning acridine only as part of a reagent name (NAO) with no toxicokinetic data. |
| popPK | Rosero_2019 | irrelevant | 0 | 0 | Acridine is mentioned only as a chemical stain (Acridine Orange) for TUNEL analysis, not as the subject of toxicokinetic study, and no kinetic parameters are reported. |
| PGx | Ruppert_2015 | not_relevant | 0 | 0 | Acridine orange is used as a fluorescent dye to visualize autophagosomes in cells derived from patients with a genetic disease; this is not a study of the pharmacokinetics or pharmacodynamics of acridine in humans. |
| PGx | SCHWARTZ_1965 | not_relevant | 0 | 0 | The paper discusses acridine orange in the context of bacterial genetics and transduction in E. coli, not pharmacogenomic effects on human pharmacokinetic or pharmacodynamic parameters. |
| popPK | Sah_2025 | irrelevant | 0 | 0 | Acridine appears only as a component of Acridine orange ethidium bromide staining for apoptosis, with no pharmacokinetic parameters reported for acridine itself. |
| popPK | Saleem_2001 | irrelevant | 0 | 0 | The study investigates N-[2-(dimethylamino)ethyl]acridine-4-carboxamide (DACA), a specific acridine derivative, not the parent substance acridine. |
| popPK | Saleem_2008 | irrelevant | 1 | 9 | The substance studied is DACA (an acridine derivative), not acridine itself. |
| popPK | Saleem_2008_2 | irrelevant | 2 | 1 | The paper focuses on ACR-4-carboxamide (a derivative), not acridine itself, and reports correlation statistics rather than specific toxicokinetic parameters like half-life or clearance for the substance acridine. |
| popPK | Sane_2012 | irrelevant | 1 | 0 | The paper reports toxicokinetic parameters for elacridar, a synthetic acridine derivative, not for acridine itself. |
| popPK | Schofield_2000 | irrelevant | 2 | 8 | The paper focuses on DACA (an acridine derivative) metabolism and kinetic parameters (Km, Vmax) for the enzyme aldehyde oxidase acting on DACA, not on the toxicokinetics of the substance acridine itself. |
| popPK | Shao_2025 | irrelevant | 0 | 0 | The paper is about immunology and autophagy in sepsis; acridine only appears as an abbreviation for the dye acridine orange (AO) in the abbreviations list, with no toxicokinetic data reported. |
| popPK | Shimoji_2019 | irrelevant | 0 | 0 | The paper concerns the genetic mechanisms of bacterial virulence attenuation and uses acriflavine (an acridine dye) solely as a mutagen/agent for vaccine development, with no toxicokinetic parameters for acridine reported. |
| PGx | Shojaie_2016 | not_relevant | 0 | 0 | The paper discusses doxorubicin and methotrexate resistance mechanisms in cell lines, mentioning acridine orange only as a staining reagent, not as a drug with PK/PD effects studied in relation to gene variants. |
| popPK | Sivakumar_2024 | irrelevant | 0 | 0 | Acridine is not the subject substance; acridine orange is used merely as a staining reagent in an in vitro study of poly-lysine peptides against Plasmodium falciparum, with no toxicokinetic parameters reported. |
| popPK | Sochová_2007 | irrelevant | 1 | 0 | The paper reports acute toxicity LC50 values for various pollutants including acridine but provides no toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Sodde_2015 | irrelevant | 0 | 0 | The paper studies the cytotoxicity of Macrosolen parasiticus plant extracts using acridine orange only as a cellular staining reagent, providing no toxicokinetic data for acridine. |
| popPK | Sohnle_1992 | irrelevant | 0 | 0 | The paper discusses a mouse model of Candida albicans infection where acridine orange is used merely as a staining reagent, with no toxicokinetic data for acridine. |
| popPK | Sorrells_2013 | irrelevant | 0 | 0 | The paper is a protocol for detecting apoptosis in zebrafish embryos, where acridine orange is mentioned only as a comparator staining method, not as a subject for toxicokinetic parameter estimation. |
| popPK | Sruthi_2015 | irrelevant | 0 | 0 | The paper discusses zinc oxide nanoparticles and uses acridine orange merely as a staining reagent for cell viability assays, with no toxicokinetic parameters for acridine. |
| PGx | Staud_2006 | not_relevant | 0 | 0 | The drug acridine (specifically the BCRP inhibitor GF120918) is mentioned only as a chemical name for a control compound, not as the analyte; the study focuses on cimetidine PK without pharmacogenomic comparisons. |
| popPK | Su_2020 | irrelevant | 0 | 0 | Acridine appears only as "acridine orange," an analytical staining reagent for autolysosomes, not as a substance undergoing toxicokinetic assessment. |
| PGx | Su_2020 | not_relevant | 0 | 0 | Acridine is mentioned only as a fluorescent dye (acridine orange) for staining autolysosomes, not as a study drug with pharmacokinetic or pharmacodynamic endpoints linked to gene variants. |
| popPK | Sun_2008 | irrelevant | 0 | 0 | Acridine appears only as acridine orange, a fluorescent stain used for cell identification, with no toxicokinetic parameters reported. |
| popPK | Sun_2025 | irrelevant | 0 | 0 | Acridine appears only as a component of the fluorescent dye acridine orange (AO/EtBr) used for apoptosis staining, not as the subject of toxicokinetic investigation. |
| popPK | Sverdrup_2002 | irrelevant | 0 | 0 | The paper reports soil ecotoxicity endpoints (NOECs) for acridine in soil microbes, providing no toxicokinetic parameters such as absorption rates, half-lives, or partition coefficients. |
| popPK | Teitelbaum_2012 | irrelevant | 3 | 8 | The pharmacokinetic parameters reported are for specific substituted 9-amino acridine drug candidates (Compounds 1 and 2), not for acridine itself, which is the subject substance. |
| popPK | Tian_2008 | irrelevant | 0 | 0 | Acridine appears only as part of the chemical name of the inhibitor GF120918, not as the subject substance for kinetic parameters. |
| popPK | Udroiu_2026 | irrelevant | 0 | 0 | Acridine Orange is used solely as a fluorescent staining reagent for the micronucleus assay, with no kinetic data reported for acridine. |
| popPK | Ullrich_1992 | irrelevant | 2 | 0 | The paper reports inhibitory constants (Ki) for transport of a probe substance, not toxicokinetic parameters for the disposition of acridine itself. |
| popPK | Vecera_2007 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of sanguinarine, not acridine; benz[c]acridine is only mentioned as a non-detected metabolite/reference. |
| popPK | Wang_2008 | irrelevant | 0 | 0 | Acridine is part of the chemical name for GF120918 (a transporter inhibitor) and is not the subject substance; the kinetic parameters belong to nitrofurantoin. |
| PGx | Wang_2008 | not_relevant | 0 | 0 | The study investigates the effect of the ABCG2 inhibitor GF120918 (an acridine derivative) on the pharmacokinetics of nitrofurantoin, not the effect of a gene variant on the PK/PD parameters of an acridine drug itself. |
| PGx | Wang_2012 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and stereoselectivity of pantoprazole involving the drug GF120918 (which has an acridine moiety), but does not study acridine as a drug nor report pharmacogenomic effects of gene variants. |
| popPK | Wang_2016 | irrelevant | 0 | 0 | Acridine is used merely as a staining reagent (acridine orange) and not as the subject of toxicokinetic investigation. |
| popPK | Weng_2021 | irrelevant | 0 | 0 | The paper studies the toxicity of epoxiconazole in zebrafish, with acridine appearing only as a component of the staining dye (acridine orange) and not as a subject of toxicokinetic analysis. |
| PGx | Woodahl_2004 | not_relevant | 0 | 0 | The text does not mention the drug "acridine"; it discusses P-glycoprotein substrates such as rhodamine-123, doxorubicin, vinblastine, and vincristine. The word "acridine" appears only in the chemical name of the MDR1 mutant (which contains an acridine moiety), but the drug itself is not acridine. |
| popPK | Wu_2003 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of tacrolimus, felodipine, and other inhibitors, where an acridine derivative (GG918) is used only as a P-gp inhibitor/reagent, not as the subject of kinetic parameter extraction. |
| popPK | Wu_2023 | irrelevant | 0 | 0 | The paper focuses on the pesticide methidathion, with acridine appearing only as "acridine orange," a fluorescent dye used for staining assays, not as the subject of kinetic studies. |
| PGx | Yamazoe_2020 | not_relevant | 0 | 0 | The paper focuses on computational docking and molecular modeling of CYP3A4-ligand interactions (including a dibenzoacridine derivative) rather than clinical pharmacogenomic effects on PK/PD parameters. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper describes a drug delivery system design and therapeutic mechanism, reporting no toxicokinetic parameters (clearance, half-life, etc.) for acridine. |
| popPK | Yanni_2010 | irrelevant | 0 | 0 | Acridine appears only as part of the chemical name of an inhibitor (GF120918) used to study micafungin, with no kinetic data reported for acridine itself. |
| popPK | Yasuda_2011 | irrelevant | 0 | 0 | The paper reports on radiation-induced neurotoxicity using medaka fish, and acridine appears only as part of the "acridine orange" vital dye used for staining, not as a substance undergoing toxicokinetic study. |
| PGx | Zamek-Gliszczynski_2005 | not_relevant | 0 | 0 | The drug studied is acetaminophen sulfate, and the text only mentions acridine as part of the chemical name of an inhibitor (GF120918), not as the drug being tested for pharmacogenomic effects. |
| PGx | Zamek-Gliszczynski_2006 | not_relevant | 0 | 0 | The study focuses on the transport of 4-methylumbelliferone metabolites, not acridine; GF120918 (an acridine derivative) is used only as an inhibitor and does not report its PK/PD changes. |
| popPK | Zhang_2005 | irrelevant | 0 | 0 | The paper focuses on topotecan and flavonoids, mentioning acridine only as part of the chemical name of the inhibitor GF120918, with no kinetic data for acridine. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | Acridine orange is used only as a lysosomal staining dye; the paper focuses on TMEM175 protein function in rats and reports no toxicokinetic parameters for acridine. |
| popPK | Zhang_2021 | irrelevant | 0 | 0 | Acridine appears only as Acridine orange, a fluorescent dye used to measure lysosomal pH, not as a subject of toxicokinetic study. |
| PGx | Zhao_2024 | not_relevant | 0 | 0 | The text mentions acridine only as 'acridine orange', a staining reagent for apoptosis, not as a pharmacological drug with PK/PD parameters being studied in relation to genetic variants. |
| popPK | Zhou_2001 | irrelevant | 0 | 0 | Acridine appears only as part of the structure name for DACA (an inhibitor/comparator), and the kinetic parameters (Ki values) belong to DMXAA metabolism, not acridine disposition. |
| popPK | Zia_2022 | irrelevant | 0 | 0 | The paper uses acridine orange solely as a viability dye/staining reagent for cell morphology in a neurodegeneration study and reports no toxicokinetic parameters for the substance acridine. |
| popPK | Zientek_2010 | irrelevant | 1 | 0 | Acridine is part of the name of a metabolite/DACA (N-[(2'-dimethylamino)ethyl]acridine-4-carboxamide) in a study about aldehyde oxidase clearance for various drugs, not a study on acridine's toxicokinetics. |
| popPK | Zorzanelli_2022 | irrelevant | 1 | 0 | The paper focuses on the cytotoxicity and mechanism of action of novel acridine-core naphthoquinone derivatives (specifically compound 4e), reporting only IC50 values, docking scores, and qualitative ADMET predictions, with no quantitative toxicokinetic parameters (half-lives, clearance, etc.) for acridine. |
| popPK | da_1985 | irrelevant | 0 | 0 | The paper reports toxicodynamic effects on spermatogenesis and cell survival rates, but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for acridine or its derivatives. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bacridine%5D&body=Drug%3A%20acridine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_acridine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-16 13:51 UTC</sub>
