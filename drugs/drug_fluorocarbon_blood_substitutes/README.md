<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05A&quot;,&quot;href&quot;:&quot;atc/B05A.md&quot;},{&quot;label&quot;:&quot;fluorocarbon blood substitutes&quot;}]"></div>

# fluorocarbon blood substitutes

- **generic name:** fluorocarbon blood substitutes
- **ATC codes:** `B05AA03`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Perftoran is a fluorocarbon emulsion used as a blood substitute, intended to take over some of the oxygen-carrying role of blood. It is classified among blood substitutes and perfusion solutions and is used mainly in Russia and a few other countries, but has never been approved in the European Union or the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4359344](https://www.wikidata.org/wiki/Q4359344) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 22:17 | 1:21 | 0/0/0 | 0/0/0 | 0/0/0 | 29,860/2,328 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 3/1 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 44 matched, 32 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Addicks_2025 | irrelevant | 0 | 0 | The paper is a transcriptomic study on PFAS toxicity in liver spheroids and does not report pharmacokinetic parameters for fluorocarbon blood substitutes. |
| popPK | Amir_2017 | irrelevant | 2 | 0 | The study focuses on the development of a radiolabeling method for PET imaging and qualitative biodistribution patterns in mice, without reporting quantitative compartmental PK parameters (CL, V, Q) for the fluorocarbon itself. |
| popPK | Bottalico_1991 | irrelevant | 1 | 0 | The study measures the clearance of probe particles (carbon and red blood cells) to assess Kupffer cell function, rather than reporting the pharmacokinetic disposition parameters (CL, V, t1/2) of the fluorocarbon blood substitute itself. |
| popPK | Castro_1984 | irrelevant | 0 | 0 | The study measures the clearance of human erythrocytes (a probe) to assess reticuloendothelial system function, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the fluorocarbon blood substitute itself. |
| popPK | Dhimitruka_2016 | irrelevant | 0 | 0 | The paper describes the synthesis and characterization of perfluorocarbon emulsions as EPR oximetry probes, not the pharmacokinetic disposition of fluorocarbon blood substitutes. |
| popPK | Doolette_2005 | irrelevant | 1 | 0 | The study investigates the pharmacokinetics of lignocaine (the subject drug) in the presence of a perfluorocarbon emulsion (co-administered agent), rather than the PK of the perfluorocarbon itself. |
| popPK | Giraudeau_2013 | irrelevant | 0 | 0 | The study is a molecular imaging investigation of PFOB nanoparticles for tumor detection, not a pharmacokinetic study reporting quantitative disposition parameters like clearance or volume. |
| popPK | Goodman_1984 | irrelevant | 0 | 0 | The paper discusses the use of perfluorocarbon emulsions as tumor sensitizers and their side effects (organ enlargement), but does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the fluorocarbon itself. |
| popPK | Helmi_2015 | irrelevant | 0 | 0 | The study evaluates the therapeutic efficacy of perfluorocarbon emulsions in treating infection in mice and does not report any pharmacokinetic parameters (e.g., clearance, volume, half-life) for the drug itself. |
| popPK | Hosgood_2011 | irrelevant | 0 | 0 | The study evaluates organ preservation efficacy (renal function, blood flow) in pigs, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the fluorocarbon. |
| popPK | Jäger_1994 | irrelevant | 0 | 0 | The study measures the clearance of colloidal carbon (a probe for RES function) to indirectly assess the storage of perfluorochemicals, rather than reporting direct pharmacokinetic parameters (CL, V, t1/2) of the fluorocarbon blood substitutes themselves. |
| popPK | Kemner_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of antipyrine, diazepam, penicillin, and sulfamethazine in the presence of fluorocarbon blood substitutes, not the pharmacokinetics of the fluorocarbon itself. |
| popPK | Kokunai_1982 | irrelevant | 0 | 0 | The study focuses on the therapeutic efficacy of Fluosol-43 combined with BCNU in a tumor model, reporting survival times rather than quantitative pharmacokinetic parameters (CL, V, etc.) for the fluorocarbon. |
| popPK | Konishi_2023 | irrelevant | 2 | 0 | The study focuses on 19F MRI imaging properties and biodistribution of perfluorocarbon nanoparticles as contrast agents, not on quantitative pharmacokinetic parameters (CL, V, etc.) for fluorocarbon blood substitutes as therapeutic drugs. |
| popPK | Lane_1986 | irrelevant | 0 | 0 | The study investigates the immunological effects (neutrophil migration and infection mortality) of Fluosol-DA, not its pharmacokinetic disposition parameters. |
| popPK | Lutz_1980 | irrelevant | 2 | 0 | The study focuses on organ function and distribution (storage) in rats rather than reporting quantitative pharmacokinetic parameters like clearance, volume of distribution, or half-life for the perfluorochemicals. |
| popPK | Mason_1992 | irrelevant | 0 | 0 | The study uses a perfluorocarbon emulsion as a diagnostic probe for 19F NMR spectroscopy to measure myocardial oxygen tension, not to characterize the pharmacokinetic disposition parameters of the drug itself. |
| popPK | Melich_2024 | irrelevant | 2 | 0 | The study focuses on perfluorocarbon nanodroplets as ultrasound contrast agents (diagnostic) rather than pharmacokinetic disposition parameters for therapeutic blood substitutes, and no quantitative PK values (CL, V, etc.) are provided in the evidence. |
| popPK | Nagasawa_1981 | irrelevant | 0 | 0 | The study measures local cerebral blood flow and physiological responses, not pharmacokinetic disposition parameters (CL, V, t1/2) for the fluorocarbon. |
| popPK | Nagasawa_1983 | irrelevant | 0 | 0 | The study investigates cerebral blood flow changes using Xenon-133 clearance, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the fluorocarbon blood substitute itself. |
| popPK | Niazi_1977 | irrelevant | 0 | 0 | The study investigates dichlorodifluoromethane (a refrigerant/propellant), not a fluorocarbon blood substitute. |
| popPK | Oda_1982 | irrelevant | 0 | 0 | The study evaluates clinical efficacy and regional cerebral blood flow changes, not pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Pellegrin_1985 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of gitoxin using a perfluorocarbon emulsion as a perfusion medium, not the pharmacokinetics of the fluorocarbon blood substitute itself. |
| popPK | Rice_1990 | irrelevant | 0 | 0 | The study reports dose-response data for myocardial infarct size reduction, not pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Rose_1986 | irrelevant | 0 | 0 | The paper is a clinical trial evaluating the efficacy of Fluosol DA as a radiation sensitizer and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Shrewsbury_1986 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ampicillin (a probe drug) in rats treated with Fluosol-DA, rather than the pharmacokinetics of the fluorocarbon blood substitute itself. |
| popPK | Shrewsbury_1986_2 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of antipyrine (a probe drug) to assess the effect of Fluosol-DA on hepatic metabolism, rather than reporting the PK parameters of Fluosol-DA itself. |
| popPK | Shrewsbury_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of indocyanine green and propranolol in the presence of Fluosol-DA, not the pharmacokinetic parameters of Fluosol-DA itself. |
| popPK | Shrewsbury_1987_2 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of other drugs (antipyrine, phenytoin, etc.) in the presence of Fluosol-DA, rather than the pharmacokinetic parameters of Fluosol-DA itself. |
| popPK | Shrewsbury_1989 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of antipyrine (a probe drug) to assess the effect of Fluosol-DA on metabolism, rather than reporting the disposition parameters of Fluosol-DA itself. |
| popPK | Shrewsbury_1989_2 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for the probe drug antipyrine, not for the fluorocarbon blood substitute (Fluosol-DA) itself. |
| popPK | Shrewsbury_1990 | irrelevant | 0 | 0 | The study measures the pharmacokinetics of antipyrine (a probe drug) to assess the effect of Fluosol-DA on metabolism, rather than reporting the disposition parameters of Fluosol-DA itself. |
| popPK | Shrewsbury_1992 | irrelevant | 1 | 0 | The study investigates the effect of Fluosol-DA on the metabolism of other drugs (antipyrine, sulfamethazine, acetaminophen) rather than reporting the pharmacokinetic parameters of the fluorocarbon itself. |
| popPK | Siddhanta_2025 | irrelevant | 0 | 0 | The paper focuses on perfluorocarbon (PFC) nanocapsules as a delivery vehicle for RNA therapy, not on fluorocarbon blood substitutes as a subject drug, and it does not report quantitative pharmacokinetic parameters (CL, V, etc.) for a blood substitute. |
| popPK | Siddhanta_2026 | irrelevant | 2 | 0 | The paper describes a drug delivery platform (PFC nanocapsules) and reports qualitative retention times (&gt;48h) and efficacy, but lacks quantitative compartmental PK parameters (CL, V, Q) for the fluorocarbon itself. |
| popPK | Sørensen_2019 | irrelevant | 0 | 0 | The paper is a surgical/histological study in pigs using perfluorocarbon liquid as a tool for subretinal expansion, not a pharmacokinetic study reporting disposition parameters for fluorocarbon blood substitutes. |
| popPK | Teicher_1986 | irrelevant | 0 | 0 | The study investigates the effect of Fluosol-DA on the cytotoxicity of nitrosoureas, not the pharmacokinetic parameters of Fluosol-DA itself. |
| popPK | Teicher_1987 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of melphalan (the subject drug) in the presence of Fluosol-DA (a fluorocarbon blood substitute used as an enhancer/carrier), rather than reporting PK parameters for the fluorocarbon itself. |
| popPK | Vangipuram_2018 | irrelevant | 0 | 0 | The paper is a case report on tattoo removal using a perfluorodecalin patch as an adjunct to laser therapy, not a pharmacokinetic study of fluorocarbon blood substitutes. |
| popPK | Voelker_2022 | irrelevant | 0 | 0 | The paper is a clinical case report describing the use of perfluorocarbon for lung lavage in ARDS and does not report any pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Wilson_1992 | irrelevant | 1 | 0 | The study measures oxygen uptake and clearance kinetics of a perfluorocarbon droplet in the eye, not the systemic pharmacokinetic disposition parameters (CL, V, ka) of the drug. |
| popPK | de_1989 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of 1-naphthol using a fluorocarbon emulsion as a perfusion medium, not the pharmacokinetics of the fluorocarbon itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
