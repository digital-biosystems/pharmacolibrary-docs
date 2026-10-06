<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;ethacridine lactate&quot;}]"></div>

# ethacridine lactate

- **generic name:** ethacridine lactate
- **ATC codes:** `B05CA08`, `D08AA01`
- **DrugBank:** [DB13190](https://go.drugbank.com/drugs/DB13190) · **PubChem:** not captured
- **molar mass:** 253.305 g/mol (C15H15N3O) — DrugBank
- **groups:** investigational

## About

Ethacridine lactate is an acridine-derived antiseptic used against bacterial infections, mainly as a local anti-infective and in irrigating solutions. It is not an approved medicine in the EU and is currently classed as investigational, though it remains known as a topical antiseptic.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27292662](https://www.wikidata.org/wiki/Q27292662) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 23:41 | 4:03 | 0/0/0 | 1/0/0 | 0/0/0 | 147,060/3,312 | ollama / qwen3.8:27b-mtp-q8_0 | 22 | 5/19 | 20/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Li_2021_Mpro](drugs/drug_ethacridine_lactate/pd_Li_2021_Mpro.md) | Mpro activity ← ethacridine · direct Emax (saturable) effect | — | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Li_2021_viral_titer](drugs/drug_ethacridine_lactate/pd_Li_2021_viral_titer.md) | SARS-CoV-2 viral titer ← ethacridine · direct Emax (saturable) effect | — | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 46 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbasi_2019 | irrelevant | 0 | 0 | The paper focuses on aldehyde oxidase enzyme kinetics and does not study ethacridine_lactate pharmacokinetics. |
| popPK | Abeesh_2021 | irrelevant | 0 | 0 | The study focuses on withaferin A, not ethacridine lactate, and does not report PK parameters for the target drug. |
| popPK | Akbar_2026 | irrelevant | 0 | 0 | The paper is a materials science study on nanocarrier synthesis and in-vitro antibacterial activity, reporting no pharmacokinetic parameters for ethacridine lactate. |
| popPK | Awasthi_2022 | irrelevant | 0 | 0 | The paper studies noscapine conjugates in cancer cells and does not involve ethacridine lactate or its pharmacokinetics. |
| popPK | Azuma_2018 | irrelevant | 0 | 0 | no_text gate: extracted text is mostly non-alphabetic (garbled or binary) |
| popPK | Babalska_2021 | irrelevant | 0 | 0 | The paper is a review of wound antiseptics that mentions ethacridine lactate only as an older, non-recommended agent, and contains no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Barker_1978 | irrelevant | 0 | 0 | The paper studies the mechanism of action of acridine orange on DNA in E. coli, not the pharmacokinetics of ethacridine lactate. |
| popPK | Benslama_2022 | irrelevant | 0 | 0 | The paper is a computational study on actinomycete metabolites as bioinsecticides against pea aphids and does not involve ethacridine lactate. |
| popPK | Bopp_1967 | irrelevant | 0 | 0 | The paper studies moss development and kinetin action, not the pharmacokinetics of ethacridine lactate. |
| popPK | Cysyk_1977 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AMSA (aminomethylantracymycin), not ethacridine lactate. |
| popPK | Dharmasivam_2025 | irrelevant | 0 | 0 | The paper is a review on lysosomal chemistry and cancer drug delivery, and does not report pharmacokinetic parameters for ethacridine_lactate. |
| popPK | Fathima_2023 | irrelevant | 0 | 0 | The paper studies the anticancer effects of farnesol in cell lines and does not involve ethacridine_lactate or report any pharmacokinetic parameters. |
| popPK | Ferrandez_1978 | irrelevant | 0 | 0 | The paper is a clinical case series on osseous hydatidosis treatment and does not report any pharmacokinetic parameters for ethacridine lactate. |
| popPK | Galal-Khallaf_2025 | irrelevant | 0 | 0 | The study investigates novel thiazolidinedione hybrids in zebrafish and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for anthelmintic activity and does not report pharmacokinetic parameters for ethacridine lactate. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports EC50 values for flavonoids and other compounds, but does not contain any data or analysis for ethacridine lactate. |
| popPK | Garner_2008 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of DPC 333, not ethacridine_lactate. |
| popPK | Hall_1983 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amsacrine (NSC 249992), not ethacridine lactate. |
| popPK | Hanes_1988 | irrelevant | 0 | 0 | The paper is a diagnostic study comparing staining methods for microbiology and does not report any pharmacokinetic parameters for ethacridine lactate. |
| popPK | Huang_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ethacridine's effects on thyroid cancer cells and does not report any pharmacokinetic parameters. |
| popPK | Huang_2022 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of GW1516 (a PPARδ agonist) in mice, not ethacridine lactate. |
| popPK | Jiang_2019 | irrelevant | 0 | 0 | The paper is a proteomic study of a Parkinson's disease cell model and does not involve ethacridine_lactate or pharmacokinetic parameters. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on biomolecular condensates and does not report pharmacokinetic parameters for ethacridine_lactate. |
| PD | Kilgore_2024 | not_relevant | 0 | 0 | The paper focuses on the physicochemical partitioning of small molecules into biomolecular condensates and does not report any pharmacodynamic (exposure-response or dose-response) analysis for ethacridine lactate or any other drug. |
| popPK | Koelzer_2016 | irrelevant | 1 | 0 | The paper is a medicolegal case report reporting static postmortem concentrations in body fluids, not a pharmacokinetic study with disposition parameters (CL, V, t1/2) or a PK model. |
| popPK | Lacher_2014 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of paraquat, not ethacridine_lactate. |
| popPK | Lapchinskaia_1981 | irrelevant | 0 | 0 | The paper studies the effect of acridine dyes on streptomycete growth and antibiotic production, not the pharmacokinetics of ethacridine lactate. |
| popPK | Lauer_1981 | irrelevant | 0 | 0 | The paper is a diagnostic study comparing staining techniques for microorganisms and does not contain any pharmacokinetic data for ethacridine lactate. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper is an in-vitro virology study investigating the antiviral mechanism of ethacridine against SARS-CoV-2, not a pharmacokinetic study. |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper is an in-vitro virology study investigating the antiviral mechanism of ethacridine against SARS-CoV-2, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Li_2025 | irrelevant | 0 | 0 | The paper is a network pharmacology and molecular docking study investigating the antibacterial mechanisms of ethacridine, containing no pharmacokinetic data or disposition parameters. |
| popPK | Litton_1990 | irrelevant | 0 | 0 | The study investigates CL 246,738, a different acridine derivative, not ethacridine lactate. |
| popPK | Ma_2017 | irrelevant | 0 | 0 | The paper is a mechanistic study on thyroid cell differentiation using ethacridine as a transcriptional activator, not a pharmacokinetic study, and contains no disposition parameters. |
| popPK | Ma_2020 | irrelevant | 0 | 0 | The paper is an in-vitro epigenetic study using ethacridine as a TAZ activator to induce thyroid differentiation in stem cells, and it does not report any pharmacokinetic parameters. |
| popPK | Ma_2020_2 | irrelevant | 0 | 0 | The paper is a cell biology study on thyroid cell differentiation where ethacridine is used as a differentiation agent, not a pharmacokinetic study of the drug. |
| popPK | Mangueira_2017 | irrelevant | 0 | 0 | The study evaluates a different acridine derivative (ACS-AZ10) for antitumor activity and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Mirocki_2022 | irrelevant | 0 | 0 | The paper is a crystallographic study of diclofenac-acridine co-crystals and contains no pharmacokinetic data for ethacridine lactate. |
| popPK | Na_2022 | irrelevant | 0 | 0 | The paper is a case report regarding the surgical removal of cervical cerclage stitches and labor induction, containing no pharmacokinetic data for ethacridine lactate. |
| popPK | Nirmala_2013 | irrelevant | 0 | 0 | The study focuses on the formulation and antibacterial activity of azithromycin, not the pharmacokinetics of ethacridine lactate. |
| popPK | Olund_1978 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy of Rivanol (ethacridine lactate) for abortion and does not report any pharmacokinetic parameters. |
| popPK | Olund_1980 | irrelevant | 0 | 0 | The study focuses on prostaglandin levels in amniotic fluid during Rivanol (ethacridine lactate) induced abortion and does not report any pharmacokinetic parameters for the drug. |
| popPK | Osman_2001 | irrelevant | 0 | 0 | The study investigates the biodistribution of DACA and analogues, not ethacridine lactate. |
| popPK | Othman_2018 | irrelevant | 0 | 0 | The paper is a review of the anticancer activity of acridine derivatives in preclinical cell line studies and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Pawlędzio_2024 | irrelevant | 0 | 0 | The paper is a quantum crystallography study of 9-aminoacridine crystal structures and electronic properties, not a pharmacokinetic study of ethacridine lactate. |
| popPK | Paxton_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amsacrine and its analogue CI-921, not ethacridine lactate. |
| popPK | Paxton_1992 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of N-[2-(dimethylamino)ethyl]acridine-4-carboxamide (AC), not ethacridine lactate. |
| popPK | Paxton_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of acridine-4-carboxamide (AC), not ethacridine lactate. |
| popPK | Pigatto_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of AC04 (an acridine derivative), not ethacridine lactate. |
| popPK | Resen_2022 | irrelevant | 0 | 0 | The study focuses on 5-Fluorouracil and Gemcitabine delivery systems and does not involve ethacridine_lactate. |
| popPK | Richardson_1981 | irrelevant | 0 | 0 | The paper studies the displacement of acridine orange (a different drug) from DNA by metals and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Richardson_1981_2 | irrelevant | 0 | 0 | The paper describes in-vitro competitive binding studies of DNA-interacting compounds and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Sah_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Kaempferol, not ethacridine_lactate. |
| popPK | Sane_2012 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of elacridar (GF120918), not ethacridine lactate. |
| popPK | Schofield_2000 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of DACA (an anticancer agent), not ethacridine_lactate. |
| popPK | Shao_2025 | irrelevant | 0 | 0 | The paper investigates the role of ILC2 and IL4 in sepsis-induced cardiac dysfunction and autophagy in mice, with no mention of ethacridine lactate or its pharmacokinetics. |
| popPK | Sharma_2023 | irrelevant | 0 | 0 | The paper is a review of acridine scaffolds for Alzheimer's disease and does not report any pharmacokinetic parameters for ethacridine lactate. |
| popPK | Shepard_1981 | irrelevant | 0 | 0 | The paper is a histological study on acridine orange (a different drug) and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Sinha_2023 | irrelevant | 0 | 0 | The paper is a diagnostic study for Theileria detection in cows and does not involve ethacridine_lactate pharmacokinetics. |
| popPK | Sinko_2004 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of saquinavir, not ethacridine_lactate. |
| popPK | Sivakumar_2024 | irrelevant | 0 | 0 | The paper investigates poly-basic peptides against Plasmodium falciparum and does not study the pharmacokinetics of ethacridine lactate. |
| popPK | Sohnle_1992 | irrelevant | 0 | 0 | The study investigates the clearance of Candida albicans infections in mice and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Southworth_1981 | irrelevant | 0 | 0 | The study investigates benz(a)acridine in fish, not ethacridine lactate. |
| popPK | Su_1995 | irrelevant | 0 | 0 | The paper focuses on the synthesis and antitumor activity of acridine derivatives (specifically AHMA) and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Teitelbaum_2012 | irrelevant | 0 | 0 | The study investigates 9-amino acridine compounds (1 and 2) for glioma treatment, not ethacridine lactate. |
| popPK | Trzybiński_2013 | irrelevant | 0 | 0 | The paper is a crystallographic study of a chemical precursor (2,6-dimethylphenyl acridine-9-carboxylate) and contains no pharmacokinetic data for ethacridine lactate. |
| popPK | Vlasova_1996 | irrelevant | 0 | 0 | The paper describes a clinical procedure for pregnancy termination using rivanol (ethacridine lactate) but does not report any pharmacokinetic parameters or quantitative disposition data. |
| popPK | Wilkinson_1999 | irrelevant | 0 | 0 | The paper is a review of donepezil, a different drug, and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | Yao_2020 | irrelevant | 0 | 0 | The paper is a clinical case report regarding the use of ethacridine lactate for pregnancy termination and does not contain any pharmacokinetic data or disposition parameters. |
| popPK | Yu_2020 | irrelevant | 0 | 0 | The paper is a histopathological study of placental changes after rivanol (ethacridine lactate) induced abortion and contains no pharmacokinetic data. |
| popPK | Zhou_2018 | irrelevant | 0 | 0 | The paper is a review on mesoporous silica nanoparticles for drug delivery and does not report pharmacokinetic parameters for ethacridine lactate. |
| popPK | da_2019 | irrelevant | 0 | 0 | The study focuses on in vitro binding and enzyme inhibition of acridine-thiosemicarbazone derivatives, not the pharmacokinetics of ethacridine lactate. |
| popPK | de_2018 | irrelevant | 0 | 0 | The study focuses on the in vitro antimalarial activity and DNA/HSA binding interactions of acridine derivatives, not the pharmacokinetics of ethacridine lactate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
