<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;pixantrone&quot;}]"></div>

# pixantrone

- **generic name:** pixantrone
- **ATC codes:** `L01DB11`
- **DrugBank:** [DB06193](https://go.drugbank.com/drugs/DB06193) · **PubChem:** [CID 134019](https://pubchem.ncbi.nlm.nih.gov/compound/134019)
- **molar mass:** 325.372 g/mol (C17H19N5O2) — DrugBank
- **groups:** approved, withdrawn

## About

Pixantrone is an antineoplastic drug that acts as a topoisomerase II inhibitor. It is administered intravenously as an injection. Pixantrone is no longer in use.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q7199690](https://www.wikidata.org/wiki/Q7199690), [Wikipedia](https://en.wikipedia.org/wiki/Pixantrone?oldid=1329210282) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Jiang_2026_HisD_PIX_binding](drugs/drug_pixantrone/pd_Jiang_2026_HisD_PIX_binding.md) | HisD-pixantrone binding ← pixantrone · target-mediated drug disposition | — | Jiang W et al., Histidinol dehydrogenase (HisD): a crit…, Microbiology spectrum (2026) | [10.1128/spectrum.01429-25](https://doi.org/10.1128/spectrum.01429-25) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 03:33 | 0:05 | 0/0/0 | 1/0/0 | 0/0/0 | 3,673/172 | einfracz / qwen3.8-27b | 9 | 1/8 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 39 matched, 37 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ankers_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry and in vitro DNA adduct study for a novel acridine derivative (C4-DACA), mentioning pixantrone only as a comparative reference for mechanism; it contains no pharmacokinetic data. |
| PGx | Ankers_2014 | not_relevant | 0 | 0 | The paper reports chemical synthesis and DNA sequence selectivity of a novel compound (C4-DACA) and mentions pixantrone only for comparison of adduct specificity; it does not report pharmacogenomic effects on PK/PD parameters for pixantrone. |
| popPK | Antonini_2008 | irrelevant | 0 | 0 | The paper is a synthesis and in vitro antitumor activity study, containing no pharmacokinetic data for pixantrone. |
| PGx | Antonini_2008 | not_relevant | 0 | 0 | The paper focuses on the synthesis and in vitro antitumor activity of bis-derivative compounds, without reporting any pharmacogenomic effects on pixantrone PK or PD parameters. |
| popPK | Cavaletti_2004 | irrelevant | 1 | 0 | This is a pharmacodynamic/immunological study in rats, and while it mentions that effective plasma concentrations can be obtained via i.v. administration in humans, it does not provide the quantitative PK parameters (CL, V, t1/2) for pixantrone in the evidence provided. |
| PGx | Cavaletti_2004 | not_relevant | 0 | 0 | The paper reports preclinical efficacy and safety of pixantrone in EAE models but contains no data on gene variants or genotypes affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | The study focuses on the mechanistic anticancer effects and drug repurposing of pixantrone, not on its pharmacokinetic disposition parameters. |
| PGx | Chen_2024 | not_relevant | 0 | 0 | The paper describes the mechanism of action of pixantrone on HOIL-1 and its efficacy in HCC models, but it does not report any pharmacogenomic analysis (gene variants affecting PK/PD) or specific PK/PD parameter changes driven by genetics. |
| popPK | Chen_2024_2 | irrelevant | 0 | 0 | The study is a mechanistic in vitro/in vivo efficacy and target identification paper (MCM2 inhibitor) with no pharmacokinetic parameters (CL, Vd, ka, etc.) reported for pixantrone. |
| PGx | Chen_2024_2 | not_relevant | 0 | 0 | The paper reports pixantrone as a novel MCM2 inhibitor for ovarian cancer but contains no data on gene variants affecting its pharmacokinetics or pharmacodynamics. |
| popPK | Colombo_2009 | irrelevant | 0 | 0 | The study focuses on the in vitro effects of pixantrone on amyloid beta oligomerization, containing no pharmacokinetic parameters. |
| PGx | Colombo_2009 | not_relevant | 0 | 0 | The paper investigates the in vitro mechanism of pixantrone on amyloid beta aggregation and neurotoxicity, not pharmacogenomic effects on PK/PD. |
| popPK | Evison_2007 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of drug-DNA adduct formation, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Evison_2007 | not_relevant | 0 | 0 | The paper describes the in vitro chemical reaction between pixantrone and formaldehyde to form DNA adducts and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Evison_2008 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of DNA alkylation and adduct formation, containing no pharmacokinetic parameters for pixantrone. |
| PGx | Evison_2008 | not_relevant | 0 | 0 | The paper describes the chemical mechanism of DNA alkylation by pixantrone and does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Evison_2009 | irrelevant | 0 | 0 | The paper describes in vitro mechanistic studies on pixantrone-DNA interactions and cell cytotoxicity, containing no pharmacokinetic parameters. |
| PGx | Evison_2009 | not_relevant | 0 | 0 | The paper investigates how epigenetic CpG methylation modulates DNA binding and cytotoxicity, which is not a standard pharmacogenomic study of inherited gene variants affecting PK/PD. |
| popPK | Evison_2010 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay analyzing drug-DNA interactions and transcriptional footprinting, not a pharmacokinetic study reporting quantitative disposition parameters. |
| PGx | Evison_2010 | not_relevant | 0 | 0 | The paper describes an in vitro transcription assay for drug-DNA interactions and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Gonsette_2004 | irrelevant | 0 | 0 | The paper is a review of immunosuppressants in multiple sclerosis and contains no quantitative pharmacokinetic parameters or PK modeling for pixantrone. |
| PGx | Gonsette_2004 | not_relevant | 0 | 0 | The text is a review of immunosuppressants and makes no mention of pharmacogenomics, genetic variants, or their effects on pixantrone's PK/PD. |
| popPK | Jiang_2026 | irrelevant | 0 | 0 | The paper is a mechanistic study of Staphylococcus aureus virulence and does not report any pharmacokinetic parameters (clearance, volume, etc.) for pixantrone. |
| PGx | Jiang_2026 | not_relevant | 0 | 0 | The paper investigates pixantrone as an anti-virulence agent against Staphylococcus aureus and does not report pharmacogenomic effects on its PK/PD parameters. |
| popPK | Koch_2016 | irrelevant | 0 | 0 | The study is an in vitro and ex vivo (CAM assay) mechanistic investigation of drug resistance and cellular efficacy, not a pharmacokinetic study reporting quantitative disposition parameters for pixantrone. |
| PGx | Koch_2016 | not_relevant | 0 | 0 | The paper investigates a mechanism of drug resistance (exosomal export) modulated by indomethacin in cell lines, but does not report a pharmacogenomic effect (gene variant/genotype/phenotype) on the PK or PD of pixantrone in a patient or model system suitable for pharmacogenomic classification. |
| popPK | Kurmasheva_2014 | irrelevant | 0 | 0 | The paper reports in vitro IC50 and in vivo efficacy (tumor response) data, but contains no quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for pixantrone. |
| PGx | Kurmasheva_2014 | not_relevant | 0 | 0 | The paper reports standard preclinical PK/PD efficacy data without analyzing specific gene variants, genotypes, or phenotypes. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | Pixantrone is only a lead compound for the development of a new drug (17d), and no quantitative PK parameters for pixantrone are reported. |
| PGx | Liang_2026 | not_relevant | 0 | 0 | The paper reports the discovery of a novel P2X7R antagonist (compound 17d) based on the pixantrone scaffold and its efficacy in cancer models, but it contains no pharmacogenomic analysis or gene variant effects on pixantrone PK/PD. |
| popPK | Luo_2018 | irrelevant | 0 | 0 | No quantitative pharmacokinetic parameters for pixantrone are reported in the provided evidence. |
| PGx | Luo_2018 | not_relevant | 0 | 0 | The paper reports on a novel drug delivery system (liposomes) but does not investigate the impact of genetic variants or genotypes on pixantrone pharmacokinetics or pharmacodynamics. |
| popPK | Luo_2018_2 | irrelevant | 1 | 0 | The study focuses on the synthesis and cellular uptake of pixantrone-loaded liposomes, reporting no quantitative systemic pharmacokinetic parameters such as clearance or volume of distribution for pixantrone. |
| PGx | Luo_2018_2 | not_relevant | 0 | 0 | The paper reports a drug delivery formulation study involving neutrophils and liposomes, with no investigation of genetic variants or pharmacogenomics affecting pixantrone pharmacokinetics or pharmacodynamics. |
| popPK | Maideen_2022 | irrelevant | 0 | 0 | The paper is a review of loop diuretic interactions and mentions pixantrone only as a comparator drug for potential pharmacodynamic interactions, without reporting any quantitative PK parameters. |
| PGx | Maideen_2022 | not_relevant | 0 | 0 | The paper is a review of drug-drug interactions involving loop diuretics and mentions pixantrone only as a potential interacting agent, without reporting any pharmacogenomic data or genotype-based effects on PK/PD parameters. |
| popPK | Mansour_2010 | irrelevant | 0 | 0 | The study focuses on the chemical synthesis and biological mechanism of anthracenedione derivatives (DNA adduct formation) and does not report any pharmacokinetic parameters for pixantrone. |
| PGx | Mansour_2010 | not_relevant | 0 | 0 | The paper discusses chemical synthesis and DNA adduct stability of pixantrone derivatives, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Mansour_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of pixantrone-DNA adduct formation in cancer cells and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| PGx | Mansour_2022 | not_relevant | 0 | 0 | The study investigates chemical drug-drug interactions with a prodrug in cancer cells, not pharmacogenomic effects of genetic variants on PK/PD parameters. |
| popPK | Marolda_2013 | irrelevant | 0 | 0 | The study is mechanistic/immunological regarding therapeutic effects in rats and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for pixantrone. |
| PGx | Marolda_2013 | not_relevant | 0 | 0 | The paper investigates the therapeutic mechanism of pixantrone in an animal model but does not report pharmacogenomic effects (gene variants affecting PK/PD). |
| popPK | Mazzanti_2005 | irrelevant | 0 | 0 | The study focuses on immunological effects (B cell count, IgG production, apoptosis) in an EAE rat model and does not report pharmacokinetic parameters such as clearance or volume of distribution. |
| PGx | Mazzanti_2005 | not_relevant | 0 | 0 | The paper describes the general pharmacodynamic effects of pixantrone on immune cells in an animal model, but does not report any association with genetic variants or genotypes. |
| popPK | Meng_2012 | irrelevant | 0 | 0 | The study focuses on nanoparticle preparation and in vitro release/cellular uptake, lacking any in vivo pharmacokinetic disposition parameters (CL, V, ka) for pixantrone. |
| PGx | Meng_2012 | not_relevant | 0 | 0 | The paper focuses on the formulation of pixantrone nanoparticles for drug delivery and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Morgan_2022 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of new anthraquinone derivatives where pixantrone is only mentioned as background literature, with no pharmacokinetic data provided. |
| PGx | Morgan_2022 | not_relevant | 0 | 0 | The paper describes in vitro anticancer screening of synthetic analogs and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of pixantrone. |
| popPK | Reis-Mendes_2018 | irrelevant | 0 | 0 | This is an in-vitro cardiotoxicity study in H9c2 cells and does not report any quantitative pharmacokinetic disposition parameters (e.g., CL, V, t1/2) for pixantrone. |
| PGx | Reis-Mendes_2018 | not_relevant | 0 | 0 | The study is an in vitro toxicity investigation of pixantrone on H9c2 cells and does not involve genetic variants or pharmacokinetic/pharmacodynamic parameters related to pharmacogenomics. |
| popPK | She_2014 | irrelevant | 3 | 0 | The paper mentions pharmacokinetics in the abstract but provides no numeric PK parameters, and the data resides in the full text/tables not included in the evidence. |
| PGx | She_2014 | not_relevant | 0 | 0 | The paper focuses on a novel liposomal formulation for drug delivery and does not investigate pharmacogenomic variants or their impact on PK/PD parameters. |
| popPK | Song_2016 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics, acute toxicity, and antitumor efficacy of liposomal formulations in mice, without reporting quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life for pixantrone. |
| PGx | Song_2016 | not_relevant | 0 | 0 | The study investigates the physicochemical properties and in vivo efficacy of liposome formulations for pixantrone, not the effect of gene variants on its PK or PD. |
| popPK | Song_2022 | irrelevant | 2 | 0 | The study focuses on nanocarrier formulation performance (size, encapsulation, accumulation) and qualitative in vivo kinetics rather than reporting quantitative compartmental PK parameters (CL, V, ka) for pixantrone. |
| PGx | Song_2022 | not_relevant | 0 | 0 | The paper discusses formulation effects on pharmacokinetics and pharmacodynamics in mice, but reports no pharmacogenomic effects (gene variants) on pixantrone parameters. |
| popPK | Spinaci_2023 | irrelevant | 0 | 0 | This is an in-vitro enzyme/receptor study and reports no pixantrone pharmacokinetic parameters. |
| popPK | Srokowski_2011 | irrelevant | 1 | 0 | The paper describes a phase 1 clinical trial focused on safety and efficacy, and the provided evidence does not report any quantitative pharmacokinetic parameters for pixantrone. |
| PGx | Srokowski_2011 | not_relevant | 0 | 0 | The text describes a clinical trial evaluating the safety and efficacy of a combination regimen containing pixantrone, with no mention of pharmacokinetic/pharmacodynamic studies or gene variant analyses. |
| popPK | Sun_2024 | irrelevant | 0 | 0 | The paper focuses on the mechanistic oncogenic function of SMARCAL1 and pixantrone's inhibitory effect on cell proliferation, not on quantitative pharmacokinetic disposition parameters. |
| PGx | Sun_2024 | not_relevant | 0 | 0 | The paper investigates pixantrone as a therapeutic agent targeting SMARCAL1 in SCLC, but does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Ubiali_2008 | irrelevant | 0 | 0 | The paper is a preclinical immunopharmacology study in Lewis rats focused on immunosuppressive efficacy and mechanistic effects (T-cell proliferation, antibody levels), with no pharmacokinetic parameters reported. |
| PGx | Ubiali_2008 | not_relevant | 0 | 0 | The paper describes the pharmacodynamic efficacy of pixantrone in an animal model but does not report any gene variant or genotype effects on its PK/PD parameters. |
| popPK | Willenbacher_2019 | irrelevant | 0 | 0 | The study is an in vitro and ex ovo (CAM assay) investigation of anti-myeloma efficacy and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for pixantrone. |
| PGx | Willenbacher_2019 | not_relevant | 0 | 0 | The study reports in vitro pharmacodynamic activity against myeloma cell lines but does not investigate pharmacogenomic effects or gene variants on PK/PD parameters. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug-virus interactions (SARS-CoV-2 NP-RNA binding) and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for pixantrone. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper investigates the mechanism of action (SARS-CoV-2 NP-RNA interaction) of pixantrone and other topoisomerase inhibitors, but it does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bpixantrone%5D&body=Drug%3A%20pixantrone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_pixantrone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
