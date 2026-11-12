<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Deoxyadenosine&quot;}]"></div>

# Deoxyadenosine

- **generic name:** Deoxyadenosine
- **T3DB:** [T3D4958](http://www.t3db.ca/toxins/T3D4958) · **PubChem:** [CID 13730](https://pubchem.ncbi.nlm.nih.gov/compound/13730)

## About

Deoxyadenosine is a derivative of nucleoside adenosine. It is comprised of adenine attached to a deoxyribose moiety via a N9-glycosidic bond. Deoxyribose differs from ribose by the absence of oxygen in the 3' position of its ribose ring. …

- **Category:** Natural Toxin, Animal Toxin
- **Health effects:** Chronically high levels of deoxyadenosine are associated Adenosine Deaminase Deficiency.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4958">T3DB T3D4958</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 958-09-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:17256">ChEBI 17256</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Pereira_2026_settlement](drugs/toxin_deoxyadenosine/pd_Pereira_2026_settlement.md) | M. galloprovincialis plantigrade settlement ← deoxyadenosine · inhibition effect | — | Pereira S et al., Structure-Activity Relationships, Molec…, Biomolecules (2026) | [10.3390/biom16040584](https://doi.org/10.3390/biom16040584) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 22:55 | 29:56 | 0/0/0 | 1/0/0 | 0/0/0 | 826,277/27,185 | einfracz / qwen3.8-27b | 26 | 2/24 | 25/1 | 0 |

## Coverage

- **PubMed hits:** 236 matched, 157 returned
- **screened:** 4  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kuttesch_1982.pdf` | Kuttesch JF et al., Renal handling of 2'-deoxyadenosine and…, Cancer chemotherapy and pha… (1982) | popPK | 9 | [10.1007/BF00255488](https://doi.org/10.1007/BF00255488) | [6980741](https://pubmed.ncbi.nlm.nih.gov/6980741) | The paper reports quantitative kinetic parameters (renal clearance ratios relative to creatinine) for deoxyadenosine in both humans and mice, demonstrating its renal disposition. |
| `Wubah_2001.pdf` | Wubah JA et al., Exposure-disease continuum for 2-chloro…, Teratology (2001) | popPK | 7 | [10.1002/tera.1059](https://doi.org/10.1002/tera.1059) | [11514946](https://pubmed.ncbi.nlm.nih.gov/11514946) | The paper is about 2-chloro-2'-deoxyadenosine (2CdA), a distinct chemical entity and analog of deoxyadenosine, not deoxyadenosine itself; while it reports PK parameters (Cmax, AUC), the substance mismatch and lack of specific rate constants or half-lives in the text lower the score, and the species is mouse. |
| `Moore_1996.pdf` | Moore BM et al., DNA polymerase photoprobe 2-[(4-azidoph…, Biochemistry (1996) | pd | 4 | [10.1021/bi952515m](https://doi.org/10.1021/bi952515m) | [8794744](https://www.ncbi.nlm.nih.gov/pubmed/8794744) | metadata signals extractable PD data (EC50) |
| `Zhang_2014.pdf` | Zhang W et al., In vitro transport characteristics of E…, European journal of pharmac… (2014) | pgx | 8 | [10.1016/j.ejphar.2014.03.022](https://doi.org/10.1016/j.ejphar.2014.03.022) | [24690257](https://www.ncbi.nlm.nih.gov/pubmed/24690257) | metadata signals extractable PGX data (ABCB1, PK/PD-context) |

<sub>queue written 2026-11-09 22:53 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albertioni_1993 | irrelevant | 1 | 1 | The paper studies 2-chloro-2'-deoxyadenosine (CdA), not deoxyadenosine. |
| popPK | Albertioni_1994 | irrelevant | 0 | 0 | The paper describes an analytical HPLC method for 2-chloro-2'-deoxyadenosine (CdA), not deoxyadenosine, and reports no kinetic parameters. |
| popPK | Aldinucci_2000 | irrelevant | 0 | 0 | Deoxyadenosine is used as a co-exposure/comparator in cytotoxicity assays, and the paper reports no quantitative toxicokinetic parameters (half-life, clearance, etc.) for deoxyadenosine. |
| popPK | Babior_1974 | irrelevant | 0 | 0 | no_text gate: only 176 chars of text extracted (&lt; 400) |
| popPK | Baltz_1993 | irrelevant | 0 | 0 | The paper reviews the pharmacokinetics of cladribine (2-chloro-2'-deoxyadenosine), which is a different substance from deoxyadenosine, and does not provide specific numeric kinetic parameters for deoxyadenosine. |
| popPK | Barrett_2018 | irrelevant | 0 | 0 | The subject substance is MK-8591 (EFdA), not deoxyadenosine; deoxyadenosine is only mentioned as part of the chemical name of the drug. |
| popPK | Beloor_2022 | irrelevant | 0 | 0 | The subject substance is deoxyadenosine (dAdo), whereas the paper reports pharmacokinetic parameters for 4'-ethynyl-2-fluoro-2'-deoxyadenosine (EFdA/Islatravir), which is a different chemical entity (a prodrug/analogue, not the natural nucleoside itself); no kinetic data for deoxyadenosine are provided. |
| popPK | Biernacki_2020 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of cladribine (2-chloro-2'-deoxyadenosine), not deoxyadenosine, which is only mentioned as a natural substrate for enzymatic comparison. |
| PGx | Bleasby_2021 | not_relevant | 0 | 0 | The paper focuses on drug-drug interaction potentials of islatravir (MK-8591) using in vitro and in vivo animal models, and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters for deoxyadenosine. |
| popPK | Bockman_2019 | irrelevant | 1 | 0 | The paper focuses on the antimicrobial activity and mechanism of action of acidomycin; 5'-deoxyadenosine is mentioned only as a toxic metabolite generated in the mechanism of biotin synthase inhibition, with no quantitative pharmacokinetic parameters provided for deoxyadenosine itself. |
| popPK | Brockman_1975 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action of 3-deazauridine, and deoxyadenosine appears only as a labeled substrate to demonstrate inhibited DNA uptake, with no kinetic parameters reported for deoxyadenosine itself. |
| popPK | Brox_1982 | irrelevant | 0 | 0 | The paper reports cytotoxicity (LD50) in an in vitro colony assay, which is a toxicodynamic endpoint rather than a quantitative toxicokinetic parameter (such as half-life, clearance, or partition coefficient). |
| popPK | Byers_1991 | irrelevant | 0 | 0 | The paper studies the antitrypanosomal mechanism of MDL 73811 in parasites and does not report toxicokinetic parameters for deoxyadenosine. |
| popPK | Byers_1992 | irrelevant | 0 | 0 | The study focuses on the uptake of the drug MDL 73811 (a deoxyadenosine analog) by *Trypanosoma brucei* and mouse leukemia cells in vitro, not on the toxicokinetics of deoxyadenosine itself in whole organisms. |
| PGx | Carson_1991 | not_relevant | 1 | 1 | The paper reports on an experimentally selected cell line mutation affecting drug sensitivity, not a human genetic variant or pharmacogenomic effect. |
| popPK | Chen_2016 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of tenofovir and emtricitabine; deoxyadenosine appears only as a reference to its triphosphate form (dATP) in the context of dNTP pool dynamics, not as a substance being characterized for kinetic parameters. |
| popPK | Chen_2017 | irrelevant | 0 | 0 | The paper describes an analytical method for measuring dNTP pools (specifically dATP) and reports static baseline concentrations, but contains no kinetic parameters (half-life, clearance, partition coefficients) for the subject substance deoxyadenosine. |
| PGx | Chen_2025 | not_relevant | 0 | 0 | The paper discusses 2'-deoxyadenosine as a metabolomic biomarker for asthma diagnosis, not as a drug undergoing pharmacokinetic or pharmacodynamic analysis influenced by genetic variants. |
| popPK | Chetsanga_1983 | irrelevant | 0 | 0 | The paper reports radiation-induced chemical bond cleavage in DNA and deoxyadenosine, which is a physicochemical reaction study, not a biological toxicokinetic study (no half-lives, clearances, or absorption rates). |
| popPK | Chow_2000 | irrelevant | 0 | 0 | The study examines the cytotoxic and apoptotic effects of 2-chloro-2'-deoxyadenosine (an analog, not deoxyadenosine) in vitro, reporting no kinetic parameters for the target substance. |
| popPK | Cooper_2004 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for clofarabine (a deoxyadenosine analog), not for deoxyadenosine itself. |
| popPK | Dalla_2015 | irrelevant | 0 | 0 | The paper is a therapeutic efficacy and dose-finding study that reports clinical outcomes and toxicity markers but contains no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) for 3'deoxyadenosine or deoxycoformycin. |
| popPK | DiGiovanni_1985 | irrelevant | 0 | 0 | The paper studies the covalent binding of dimethylbenzanthracene hydrocarbons to DNA, where deoxyadenosine is mentioned only as a component of a specific DNA adduct (syn-diol-epoxide:deoxy-adenosine), not as a subject substance for toxicokinetic parameter extraction. |
| popPK | DiGiovanni_1986 | irrelevant | 0 | 0 | The paper measures DNA adducts formed by DMBA metabolites, not the kinetic parameters (half-life, clearance, etc.) of deoxyadenosine itself. |
| popPK | Dolinar_2018 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of AMPK inhibition and reports no quantitative toxicokinetic parameters (half-life, clearance, etc.) for deoxyadenosine. |
| PGx | Farhan_2017 | not_relevant | 1 | 1 | The paper studies the association of ADA genotype with recurrent spontaneous abortion, not a pharmacokinetic or pharmacodynamic parameter of the drug deoxyadenosine. |
| PGx | Feo_1987 | not_relevant | 0 | 0 | The paper investigates the metabolism of the environmental carcinogen benzo(a)pyrene, not the drug deoxyadenosine; the mention of deoxyadenosine refers to DNA adducts formed by benzo(a)pyrene, not a pharmacokinetic or pharmacodynamic parameter of deoxyadenosine itself. |
| popPK | Fillgrove_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for islatravir, a deoxyadenosine analog, not for the subject substance deoxyadenosine itself. |
| popPK | Fissolo_2021 | irrelevant | 0 | 0 | The paper studies cladribine (an analogue), not deoxyadenosine itself, and is an in vitro mechanistic study without pharmacokinetic parameters (half-life, clearance, etc.) for the subject substance. |
| PGx | Frenkel-Pinter_2022 | not_relevant | 0 | 0 | The paper discusses the evolutionary concepts of adaptation and exaptation using adenosine as an example, but contains no pharmacogenomic data or effects on PK/PD parameters. |
| popPK | Frey_2001 | irrelevant | 0 | 0 | The paper describes the enzymatic mechanism of radical formation involving 5'-deoxyadenosine as an intermediate but does not report any quantitative toxicokinetic parameters (half-life, clearance, partition coefficients) for deoxyadenosine as a subject substance. |
| popPK | Frum_2007 | irrelevant | 1 | 0 | The paper studies deoxyadenosine as one of several test compounds to evaluate the effect of partition coefficients on follicular penetration, reporting qualitative trends rather than specific quantitative toxicokinetic parameters (half-life, clearance, etc.). |
| popPK | Fuss_2010 | irrelevant | 0 | 0 | The paper studies adenylyl cyclase enzymes in honeybees, and deoxyadenosine is mentioned only as a P-site inhibitor/reagent, not as a substance with measured toxicokinetic parameters. |
| popPK | Gamboa_2003 | irrelevant | 0 | 0 | The paper reports DNA adduct levels for acrylamide and glycidamide, not toxicokinetic parameters for deoxyadenosine. |
| popPK | Gandhi_1998 | irrelevant | 0 | 0 | The paper measures pharmacodynamics (dATP pool changes) and pharmacokinetics of hydroxyurea, not kinetic parameters for deoxyadenosine as a subject substance. |
| popPK | Gandhi_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of nelarabine and fludarabine metabolites (ara-GTP and FdATP); deoxyadenosine appears only as a reference compound for a ratio calculation and not as the subject substance. |
| popPK | Gao_1995 | irrelevant | 0 | 0 | The paper investigates apoptosis mechanisms and metabolite pool ratios in cell lines, not quantitative toxicokinetic parameters like half-life, clearance, or distribution. |
| popPK | Ghiggeri_1991 | irrelevant | 0 | 0 | The study focuses on the metabolism of puromycin aminonucleoside (PAN) and its specific metabolites (DA-Ado and MA-Ado), not deoxyadenosine itself; deoxyadenosine is not the subject substance. |
| popPK | Gorman_2003 | irrelevant | 0 | 0 | The paper uses 2'-deoxyadenosine 5'-phosphate (MRS 2179) as a receptor antagonist to study the pharmacology of ATP, ADP, and AMP, rather than measuring kinetic parameters for deoxyadenosine itself. |
| popPK | Greyz_2004 | irrelevant | 0 | 0 | The paper focuses on cladribine (a deoxyadenosine analog) and contains no quantitative kinetic parameters for deoxyadenosine itself. |
| popPK | Grytzmann_1980 | irrelevant | 0 | 0 | The paper reports antiviral activity and cytotoxicity in cell culture but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for deoxyadenosine. |
| popPK | Hentosh_2010 | irrelevant | 0 | 0 | The paper is a review discussing the mechanism of action of cladribine, not deoxyadenosine, and does not provide quantitative toxicokinetic parameters for deoxyadenosine. |
| popPK | Hillestrøm_2004 | irrelevant | 0 | 0 | The paper reports the excretion rate of 1,N6-etheno-2'-deoxyadenosine (a DNA adduct/metabolite), not the parent substance deoxyadenosine, and focuses on biomarker quantification rather than toxicokinetic parameters for deoxyadenosine itself. |
| popPK | Hohenester_1997 | irrelevant | 0 | 0 | The paper describes the crystal structure of a protein-ligand complex (SAP with dAMP) and provides no quantitative toxicokinetic parameters (half-life, clearance, etc.) for the substance. |
| popPK | Horsman_1986 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters (half-life) for melphalan, not for deoxyadenosine, which was used only as a modifier of melphalan's toxicity. |
| PGx | Huang_2018 | not_relevant | 2 | 0 | The study investigates pharmacodynamic sensitivity (IC50) to clofarabine and cytarabine, not deoxyadenosine, and focuses on drug-induced phenotypic changes and gene expression rather than specific genotype-driven PK/PD effects for the queried drug. |
| popPK | Iwamoto_2014 | irrelevant | 0 | 0 | The paper focuses on the development of an immunoassay for detecting 8,5'-cyclo-2'-deoxyadenosine (a DNA adduct/cyclonucleoside), not the toxicokinetics of deoxyadenosine itself, and contains no kinetic parameters like half-life or clearance. |
| popPK | Johns_1976 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Johnston_1986 | irrelevant | 0 | 0 | The paper describes the clinical efficacy of 2'-deoxycoformycin in hairy-cell leukaemia and notes plasma levels of deoxyadenosine were measured, but provides no quantitative toxicokinetic parameters (half-life, clearance, etc.) for deoxyadenosine in the provided evidence. |
| popPK | Johnston_2011 | irrelevant | 0 | 0 | The paper describes the mechanism of action of pentostatin and cladribine, noting that deoxyadenosine accumulates, but provides no quantitative kinetic parameters (half-life, rate constants, clearance, etc.) for deoxyadenosine itself. |
| popPK | Keil_1994 | irrelevant | 0 | 0 | The paper studies the pharmacological effect of adenosine pathway inhibitors (specifically 5'-amino,5'-deoxyadenosine, not deoxyadenosine) on antinociception in mice and does not report kinetic parameters for deoxyadenosine. |
| popPK | Kim_2025 | irrelevant | 0 | 0 | The paper reports urinary concentrations of DNA adducts (N3-methyladenine and N6-methyl-2'-deoxyadenosine) as biomarkers of exposure, not toxicokinetic parameters (half-life, clearance, etc.) for deoxyadenosine itself. |
| popPK | Kodama_2000 | irrelevant | 0 | 0 | The study measures intracellular metabolite levels and cytotoxicity (IC50) rather than toxicokinetic parameters like half-life or clearance. |
| popPK | Kulinskiĭ_1988 | irrelevant | 0 | 0 | The paper discusses the radioprotective pharmacological effect and mechanism of action of nucleosides, including 2'-deoxyadenosine, but reports no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Kuttesch_1982 | relevant | 9 | 2 | The paper reports quantitative kinetic parameters (renal clearance ratios relative to creatinine) for deoxyadenosine in both humans and mice, demonstrating its renal disposition. |
| popPK | Kuttesch_1982_2 | irrelevant | 0 | 0 | The paper studies the kinetics of 2'-deoxytubercidin, using 2'-deoxyadenosine only as a comparator or mechanistic reference, not as the subject of kinetic measurement. |
| PGx | Laszlo_2011 | not_relevant | 0 | 0 | The study evaluates gene expression (hCNT1) as a predictor of clinical response (CR rate), not a specific pharmacokinetic or pharmacodynamic parameter. |
| popPK | Laval_1998 | irrelevant | 0 | 0 | The paper reviews DNA repair mechanisms in E. coli and humans, with no kinetic parameters for deoxyadenosine disposition. |
| popPK | Lawrence_1997 | irrelevant | 0 | 0 | The paper is a review focused on gemcitabine's mechanism of action as a radiosensitizer, and deoxyadenosine (specifically dATP pools) is only mentioned in the context of cellular metabolic effects, with no toxicokinetic parameters reported for deoxyadenosine. |
| popPK | Lawrence_2025 | irrelevant | 2 | 1 | The paper is a mechanistic study of cordycepin (3'-deoxyadenosine) in cancer cells and tumor-bearing mice, reporting signaling and gene expression data; while it mentions cordycepin triphosphate intracellular levels, the specific numeric values are contained in Figure 4 which is not provided in the evidence, and no classical toxicokinetic parameters (half-life, clearance, partition coefficients) are explicitly reported for deoxyadenosine itself. |
| popPK | Le_2026 | irrelevant | 0 | 0 | The paper studies four model drugs (Dapivirine, Levonorgestrel, MK-2048, and Islatravir/EFdA); deoxyadenosine is not one of them and is only mentioned incidentally in the context of Islatravir's metabolism. |
| popPK | Leist_2011 | irrelevant | 0 | 0 | The paper is a review of cladribine (2-chlorodeoxyadenosine), a distinct analog of deoxyadenosine, and does not report quantitative kinetic parameters for deoxyadenosine itself. |
| popPK | Leuratti_1994 | irrelevant | 0 | 0 | The paper reports DNA adduct formation and detection methods, but contains no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for deoxyadenosine. |
| popPK | Li_2015 | irrelevant | 0 | 0 | The paper analyzes etheno-DNA adducts (specifically 1,N(6)-etheno-2'-deoxyadenosine) as biomarkers of oxidative damage, not the kinetic disposition of deoxyadenosine itself. |
| popPK | Liliemark_1991 | irrelevant | 0 | 10 | The paper reports pharmacokinetic parameters for 2-chloro-2'-deoxyadenosine (CdA), a different chlorinated analogue, not deoxyadenosine. |
| popPK | Liliemark_1994 | irrelevant | 0 | 0 | The paper discusses 2-chloro-2'-deoxyadenosine (CdA), which is a different substance from deoxyadenosine, and no kinetic parameters for deoxyadenosine itself are reported. |
| popPK | Liliemark_1995 | irrelevant | 0 | 0 | The paper reports kinetic parameters for 2-chloro-2'-deoxyadenosine (CdA), not deoxyadenosine, which is a distinct chemical entity. |
| popPK | Macer-Wright_2019 | irrelevant | 0 | 0 | The paper studies chlorinated nucleosides (e.g., 8-chloro-deoxyadenosine) as inflammatory inducers/biomarkers in macrophages, not the toxicokinetics of deoxyadenosine itself. |
| popPK | Major_1981 | irrelevant | 0 | 0 | The subject substance is deoxycoformycin, while deoxyadenosine is only mentioned as a metabolite that accumulated, with no specific kinetic parameters provided for deoxyadenosine itself. |
| popPK | Mao_2018 | irrelevant | 0 | 0 | The paper discusses cladribine (2-chloro-2'-deoxyadenosine), which is a different chemical substance from deoxyadenosine, and contains no quantitative toxicokinetic parameters for deoxyadenosine itself. |
| popPK | Markowitz_2018 | irrelevant | 0 | 0 | The paper concerns EFdA (MK-8591), not deoxyadenosine, and does not provide kinetic parameters for deoxyadenosine. |
| popPK | Mathieu_2004 | irrelevant | 0 | 0 | The paper reports receptor binding affinities (pA2) and functional activity of deoxyadenosine derivatives, but contains no toxicokinetic parameters such as clearance, half-life, or volume of distribution. |
| popPK | Matsumoto_1982 | irrelevant | 2 | 0 | The study measures cytotoxic sensitivity (LD50) and biochemical metabolite ratios (dATP/ATP) in cultured cells, which are pharmacodynamic or metabolic outcomes rather than quantitative pharmacokinetic parameters (e.g., half-life, clearance, partition coefficients) of deoxyadenosine disposition. |
| popPK | Matthews_2023 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for islatravir (a deoxyadenosine analog), not for the specific substance deoxyadenosine itself. |
| popPK | Maytin_1992 | irrelevant | 0 | 0 | Deoxyadenosine appears only as an analytical reagent (cordycepin) for metabolic blockade, with no kinetic parameters reported for it. |
| popPK | Maytin_1994 | irrelevant | 0 | 0 | Deoxyadenosine is used only as a pharmacological inhibitor (cordycepin) to block mRNA synthesis, not as the subject of toxicokinetic analysis. |
| popPK | McCrea_2025 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for atorvastatin, metformin, and islatravir (a deoxyadenosine analog), but does not report kinetic parameters for deoxyadenosine itself. |
| popPK | Meads_2021 | irrelevant | 0 | 0 | The paper investigates the neuroprotective efficacy of adenosine receptor agonists against soman exposure and does not report any quantitative toxicokinetic parameters for deoxyadenosine. |
| popPK | Mirkin_1987 | irrelevant | 0 | 0 | The paper reports cytotoxic potency (IC50) for cell growth inhibition in vitro, which is a toxicodynamic effect, not a toxicokinetic parameter such as clearance, half-life, or tissue distribution. |
| popPK | Monien_2009 | irrelevant | 0 | 0 | The study measures DNA adduct levels of 1-methylpyrene (deoxyguanosine and deoxyadenosine adducts) and does not report kinetic parameters for deoxyadenosine itself. |
| popPK | Moore_1996 | irrelevant | 0 | 0 | The paper reports in vitro enzymatic binding kinetics (EC50, KD) for a deoxyadenosine derivative acting as a photoaffinity label on an E. coli enzyme, not toxicokinetic disposition parameters for deoxyadenosine in a living organism. |
| popPK | Muftuoglu_2014 | irrelevant | 0 | 0 | The paper studies the molecular mechanism of action of EFdA on HIV-1 reverse transcriptase in vitro, not the toxicokinetic parameters of deoxyadenosine. |
| popPK | Muñoz_2006 | irrelevant | 0 | 0 | The paper describes pharmacokinetics of tenofovir and emtricitabine (antiretrovirals), mentioning deoxyadenosine only as a structural analog, without reporting any kinetic parameters for deoxyadenosine itself. |
| PGx | Nakata_2007 | not_relevant | 0 | 0 | The paper describes the PK/PD of EFdA in vitro but does not investigate the effect of specific human gene variants or genotypes (pharmacogenomics) on these parameters. |
| popPK | Neef_2020 | irrelevant | 0 | 0 | The paper is a metabolomics profiling study that reports changes in 2'-deoxyadenosine levels in colorectal cancer organoids due to 5-fluorouracil treatment, but it does not provide quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxyadenosine as the subject substance. |
| popPK | Nelson_1983 | irrelevant | 0 | 0 | The study is qualitative, discussing mechanisms of renal secretion and inhibition without reporting quantitative kinetic parameters like clearance values or rate constants. |
| popPK | Novotny_2000 | irrelevant | 0 | 0 | The paper focuses on chromatographic retention and chemical stability (decomposition rate constants) of deoxyadenosine, not on biological toxicokinetic parameters like half-life, clearance, or partition coefficients in living systems. |
| popPK | Nsoukpoé-Kossi_2008 | irrelevant | 0 | 0 | The paper studies the binding of platinum compounds to DNA in vitro, using deoxyadenosine (dA) only as a component of the DNA sequence (d(ApG)), not as the subject substance for toxicokinetic parameter determination. |
| PGx | Nunes_2011 | not_relevant | 1 | 5 | The paper investigates the association between the ADA gene and recurrent spontaneous abortions; it does not report PK or PD parameters of deoxyadenosine or any other specific drug as an outcome. |
| popPK | OBrien_1996 | irrelevant | 0 | 0 | The paper is a review of clinical efficacy and remission rates of purine analogs in leukemia, containing no quantitative toxicokinetic parameters for deoxyadenosine. |
| popPK | Oreja-Guevara_2019 | irrelevant | 0 | 0 | The paper is a clinical review of cladribina (a deoxyadenosine analog) for multiple sclerosis and contains no quantitative toxicokinetic parameters for deoxyadenosine itself. |
| PGx | Owens_1992 | not_relevant | 2 | 2 | The paper describes dCK mutations affecting enzyme activity on deoxyadenosine (a substrate, not the specific drug context in question), but does not report a pharmacogenomic effect on the PK or PD of deoxyadenosine itself. |
| popPK | Palmer_1976 | irrelevant | 0 | 0 | The paper describes the enzymatic mechanism of S-adenosylhomocysteinase and mentions deoxyadenosine derivatives as hypothetical intermediates in the reaction mechanism, but does not report toxicokinetic parameters (half-life, clearance, etc.) for deoxyadenosine in any biological system. |
| popPK | Panayiotou_2014 | irrelevant | 0 | 0 | The paper is a review of adenylate kinase isoforms and their role in phosphorylating nucleoside analogues, but it does not report quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for deoxyadenosine itself. |
| popPK | Patel_2015 | irrelevant | 0 | 0 | The paper reports kinetic parameters for clofarabine (a deoxyadenosine analog), not deoxyadenosine itself. |
| popPK | Pereira_2025 | irrelevant | 0 | 0 | The paper reports ecotoxicological endpoints (EC50, LC50, growth inhibition) and qualitative risk assessment (low bioaccumulation potential) but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxyadenosine. |
| popPK | Pereira_2026 | irrelevant | 0 | 0 | The paper evaluates the antifouling activity and ecotoxicological effects (growth inhibition, settlement, lethality) of nucleoside analogues, with deoxyadenosine serving only as background context or a parent compound, but reports no quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxyadenosine. |
| PGx | Plagemann_1983 | not_relevant | 0 | 0 | The paper studies adenosine metabolism, not deoxyadenosine, and focuses on cellular uptake/enzymology rather than pharmacogenomic PK/PD effects in humans. |
| popPK | Plevani_1980 | irrelevant | 0 | 0 | The paper studies the mechanism of aphidicolin inhibition of yeast DNA polymerase in vitro, and deoxyadenosine 5'-triphosphate is merely a substrate in the assay, not a subject for toxicokinetic characterization. |
| popPK | Qian_1994 | irrelevant | 0 | 0 | The paper reports kinetic parameters for the analogue CL-F-ara-A, not deoxyadenosine itself. |
| PGx | Quinlivan_2005 | not_relevant | 0 | 0 | The paper studies endogenous DNA nucleoside synthesis (deoxyadenosine as a biosynthetic product) rather than the pharmacokinetics or pharmacodynamics of an administered drug named deoxyadenosine. |
| popPK | Raheem_2025 | irrelevant | 1 | 1 | The paper reports kinetic parameters for MK-8527, which is a modified nucleoside analog (a deoxyadenosine analog), not the natural substance deoxyadenosine. |
| popPK | Redzic_1998 | irrelevant | 1 | 0 | Deoxyadenosine is studied only as a comparative nucleoside to adenosine, and no specific quantitative kinetic values for it are reported. |
| popPK | Reichelova_1996 | irrelevant | 0 | 0 | The paper reports quantitative data for 2-chloro-2'-deoxyadenosine (CdA), a different substance, rather than deoxyadenosine. |
| popPK | Reichelová_1995 | irrelevant | 1 | 0 | The paper reports quantitative kinetic parameters for 2-chloro-2'-deoxyadenosine (CdA), not deoxyadenosine. |
| popPK | Robak_2005 | irrelevant | 0 | 0 | The paper is a review of purine nucleoside analogues (like fludarabine and 2-CdA) and does not report quantitative toxicokinetic parameters for deoxyadenosine. |
| popPK | Robak_2012 | irrelevant | 0 | 0 | This is a review article discussing purine nucleoside analogs as drugs, with no specific quantitative toxicokinetic parameters reported for deoxyadenosine itself. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic associations for deoxyadenosine. |
| PGx | Robbins_1995 | not_relevant | 0 | 0 | The paper studies a cell-line resistance mutation affecting the PK of PMEA, not a human gene variant affecting deoxyadenosine. |
| popPK | Rozman_2025 | irrelevant | 0 | 0 | The paper focuses on the structural and mechanistic study of the bacterial transcriptional repressor NrdR and its binding to nucleotides (ATP, dATP), containing no toxicokinetic parameters for deoxyadenosine. |
| popPK | Santana_1991 | irrelevant | 0 | 0 | The paper studies 2-chlorodeoxyadenosine (2-CDA), not deoxyadenosine, and the kinetic parameters provided are for 2-CDA metabolites. |
| popPK | Sato_1996 | irrelevant | 0 | 0 | The paper reports dose-response and mechanistic toxicological effects (cell cycle blockade) in cells, but does not provide quantitative pharmacokinetic or toxicokinetic parameters (half-life, clearance, rate constants, etc.). |
| popPK | Sawai_1983 | irrelevant | 0 | 0 | The paper focuses on the chemical synthesis and biological activity (translation inhibition) of cordycepin analogues, reporting no pharmacokinetic or toxicokinetic parameters for deoxyadenosine. |
| popPK | Schrauzer_1975 | irrelevant | 0 | 0 | The paper describes the mechanism of an enzyme reaction where a deoxyadenosine derivative is formed as a byproduct, but it does not report toxicokinetic parameters (half-life, clearance, etc.) for deoxyadenosine as a subject substance. |
| popPK | Schumacher_2014 | irrelevant | 0 | 0 | The study reports kinetic data for DNA adducts of 1-methoxy-3-indolylmethyl compounds, not for the toxicokinetics (absorption, distribution, metabolism, excretion) of deoxyadenosine itself. |
| popPK | Schwenzer_2021 | relevant | 4 | 3 | The paper reports pharmacokinetic parameters (clearance, Vss, half-life) for NUC-7738 in dogs and humans, and notes that its metabolite (cordycepin/3'-deoxyadenosine) has a half-life of 1.6 minutes, but does not provide a detailed time-course or specific rate constants for deoxyadenosine as the primary subject; the specific values for the metabolite are limited to a single comparative half-life statement in the text. |
| popPK | Scott_1980 | irrelevant | 0 | 0 | The study investigates the biochemical mechanism of DNA synthesis inhibition and salvage pathways in rat thymus cells, reporting no toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for deoxyadenosine. |
| popPK | Shih_2023 | irrelevant | 0 | 0 | The paper focuses on the efficacy of an A1 adenosine receptor agonist (ENBA) in a seizure model following soman exposure, not on the toxicokinetic parameters of deoxyadenosine itself. |
| popPK | Simmonds_1985 | irrelevant | 1 | 0 | The paper describes the metabolic fate of deoxyadenosine in human macrophages (qualitative pathway identification) but does not report quantitative kinetic parameters (such as rate constants, half-lives, or Vmax) required for toxicokinetic modeling. |
| popPK | Sipe_2010 | irrelevant | 0 | 0 | The paper focuses on cladribine (a deoxyadenosine analog) and is a review without quantitative kinetic parameters for deoxyadenosine itself. |
| popPK | Smith_1978 | irrelevant | 0 | 0 | The paper investigates the mechanism of antiviral antagonism in cell cultures and reports dose-response values (IC50), not quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxyadenosine. |
| popPK | Sonderegger_2000 | irrelevant | 0 | 10 | The paper reports kinetic parameters for 2-chlorodeoxyadenosine (cladribine), which is a distinct chemical entity from deoxyadenosine. |
| popPK | Svendsen_1992 | irrelevant | 0 | 0 | The paper studies 3'-deoxyadenosine N1-oxide (an oxidized derivative), not deoxyadenosine itself, and reports toxicity/pharmacokinetics of the derivative. |
| popPK | Sykes_2022 | irrelevant | 0 | 0 | The paper studies islatravir (EFdA), a deoxyadenosine analog, and measures its metabolite levels; deoxyadenosine itself is only used as a comparative reference (dATP) or in the name of the drug, not as the subject substance for kinetic parameter extraction. |
| popPK | Takenaka_2007 | irrelevant | 0 | 0 | The paper studies PMEA and cladribine (2-chloro-2'-deoxyadenosine), not deoxyadenosine itself, and no kinetic parameters for deoxyadenosine are reported. |
| PGx | Takenaka_2007 | not_relevant | 0 | 0 | The study investigates transporter biology (Abcg2/Mrp4) using animal models and does not report human genetic variants affecting the pharmacokinetics or pharmacodynamics of deoxyadenosine. |
| popPK | Thammavongsa_2013 | irrelevant | 0 | 0 | The paper describes the enzymatic conversion of NETs to deoxyadenosine as a mechanism of bacterial pathogenesis and immune evasion, reporting no quantitative toxicokinetic parameters (half-life, clearance, etc.) for deoxyadenosine. |
| popPK | Tiwari_2018 | irrelevant | 1 | 0 | The paper studies the kinetics of the BPL inhibitor Bio-AMS (a biotinylated deoxyadenosine prodrug/inhibitor), not deoxyadenosine itself, and does not report kinetic parameters for free deoxyadenosine. |
| popPK | Tuli_2014 | irrelevant | 0 | 0 | The paper is a review of the pharmacological and therapeutic potential of Cordycepin (3'-deoxyadenosine) and does not report any quantitative toxicokinetic parameters such as half-life, clearance, or distribution volume. |
| popPK | Turriani_1994 | irrelevant | 0 | 0 | The paper states that deoxyadenosine is NOT a substrate for the enzyme studied, and no quantitative kinetic parameters (half-life, clearance, etc.) for deoxyadenosine disposition are reported. |
| popPK | Viator_2017 | irrelevant | 0 | 0 | The paper is a validation study for a hygiene monitoring system that detects ATP, and deoxyadenosine is mentioned only as a cross-reactivity analyte, not as a subject of toxicokinetic measurement. |
| popPK | Vock_2001 | irrelevant | 0 | 0 | The paper studies DNA adducts formed by benzo[a]pyrene metabolites on DNA, where deoxyadenosine is a DNA base rather than the subject substance for toxicokinetic parameterization. |
| PGx | Wei_2026 | not_relevant | 0 | 0 | The paper describes a drug delivery system using deoxyadenosine as a ligand for doxorubicin, reporting no pharmacogenomic effects on PK/PD parameters. |
| popPK | Winstel_2018 | irrelevant | 1 | 0 | The paper describes the mechanism of deoxyadenosine-induced cell death in human cells via the purine salvage pathway but does not report quantitative toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Winstel_2019 | irrelevant | 0 | 0 | The paper studies S. aureus infection and the mechanism of deoxyadenosine-induced apoptosis, but it does not report toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for deoxyadenosine. |
| PGx | Winstel_2019 | not_relevant | 0 | 0 | The paper investigates the genetic influence of caspase-3 variants on cell survival (apoptosis) in response to deoxyadenosine, not on the pharmacokinetics (absorption, distribution, metabolism, excretion) or systemic pharmacodynamics of deoxyadenosine as a drug. |
| popPK | Woolley_2020 | irrelevant | 0 | 0 | The paper focuses on the immunomodulatory effects of cordycepin (3'-deoxyadenosine) on insect gene expression and survival, reporting no toxicokinetic parameters such as half-life, clearance, or distribution volumes. |
| popPK | Wubah_2001 | relevant | 7 | 2 | The paper is about 2-chloro-2'-deoxyadenosine (2CdA), a distinct chemical entity and analog of deoxyadenosine, not deoxyadenosine itself; while it reports PK parameters (Cmax, AUC), the substance mismatch and lack of specific rate constants or half-lives in the text lower the score, and the species is mouse. |
| PGx | Wubah_2001 | not_relevant | 0 | 0 | The paper reports dose-response and PK/PD for 2-chloro-2'-deoxyadenosine, but does not investigate the effect of gene variants or genotypes on these parameters. |
| popPK | Yu_1995 | irrelevant | 0 | 0 | The paper focuses on electrokinetic chromatography dispersion and uses deoxyadenosine as an analyte for method validation, not for toxicokinetic parameter estimation. |
| popPK | Yu_2016 | irrelevant | 0 | 0 | The paper reports on the quantification of DNA lesions (specifically N(6)-carboxymethyl-2'-deoxyadenosine), not the toxicokinetic parameters (e.g., half-life, clearance, distribution) of the substance deoxyadenosine itself. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The paper studies EFdA (4'-ethynyl-2-fluoro-2'-deoxyadenosine), which is a different chemical substance from deoxyadenosine, and does not report kinetic parameters for deoxyadenosine itself. |
| PGx | Zhang_2014_2 | not_relevant | 0 | 0 | The paper discusses EFdA (4'-ethynyl-2-fluoro-2'-deoxyadenosine), not deoxyadenosine, and investigates in vitro transport mechanisms (P-gp/paracellular) rather than pharmacogenomic effects on PK/PD parameters. |
| popPK | do_2019 | irrelevant | 0 | 0 | The paper reports LD50 efficacy values for cordycepin (3'-deoxyadenosine) against T. cruzi, which are toxicity/effect metrics, not toxicokinetic parameters (half-life, clearance, etc.) of the substance itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdeoxyadenosine%5D&body=Drug%3A%20deoxyadenosine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_deoxyadenosine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
