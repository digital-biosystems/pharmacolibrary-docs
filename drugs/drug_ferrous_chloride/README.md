<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B03A&quot;,&quot;href&quot;:&quot;atc/B03A.md&quot;},{&quot;label&quot;:&quot;ferrous chloride&quot;}]"></div>

# ferrous chloride

- **generic name:** ferrous chloride
- **ATC codes:** `B03AA05`
- **DrugBank:** [DB13569](https://go.drugbank.com/drugs/DB13569) · **PubChem:** not captured
- **molar mass:** 126.75 g/mol (Cl2Fe) — DrugBank
- **groups:** investigational

## About

Ferrous chloride is an oral bivalent iron preparation classified as an antianemic, used to treat iron deficiency anaemia. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407867](https://www.wikidata.org/wiki/Q407867) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 20:05 | 1:17 | 0/0/0 | 0/0/0 | 0/0/0 | 47,296/1,522 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/5 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 27 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ajay_2018 | irrelevant | 0 | 0 | The paper is an in-vitro antioxidant study where ferrous chloride is used as a reagent for chelation assays, not as a subject drug for pharmacokinetic analysis. |
| PD | Ajay_2018 | not_relevant | 0 | 0 | The paper reports an IC50 for the antioxidant activity of a mulberry extract, not for ferrous chloride, and does not provide a pharmacodynamic model or exposure-response relationship for ferrous chloride. |
| popPK | Bierer_1990 | irrelevant | 0 | 0 | The study is an in-vitro immunology experiment where ferrous chloride is used as a reversal agent for an iron chelator, not as the subject of a pharmacokinetic study. |
| popPK | Caetano-Silva_2017 | irrelevant | 0 | 0 | The study is an in-vitro chemical synthesis and characterization of peptide-iron complexes, not a pharmacokinetic study. |
| popPK | Di_2012 | irrelevant | 0 | 0 | The study focuses on the formulation and diffusion of liposomes for periodontitis treatment, using ferrous chloride only as a reagent for synthesizing magnetite nanoparticles, not as a drug subject to pharmacokinetic analysis. |
| popPK | Fach_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cytotoxicity and mutagenicity, not a pharmacokinetic study, and ferrous chloride is used as a modulator rather than the subject drug. |
| popPK | Ghosh_2022 | irrelevant | 0 | 0 | The paper is a review on iron bioavailability and nanoparticles, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for ferrous chloride. |
| popPK | Gilmour_2018 | irrelevant | 0 | 0 | The paper is an environmental remediation study using FeCl2 as a soil amendment, not a pharmacokinetic study of ferrous chloride. |
| popPK | Gremme_2025 | irrelevant | 0 | 0 | The study is a mechanistic/toxicological investigation in C. elegans focusing on bioavailability and gene expression, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for ferrous chloride. |
| popPK | Hall_1991 | irrelevant | 0 | 0 | The study focuses on the antioxidant properties of U-78517F, using ferrous chloride only as an in-vitro initiator for lipid peroxidation, and does not report pharmacokinetic parameters for ferrous chloride. |
| popPK | Kaushik_2020 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of nanoparticle biosynthesis and hyperthermia, not a pharmacokinetic study of ferrous chloride. |
| popPK | Kian_2026 | irrelevant | 0 | 0 | The paper describes the synthesis of inorganic nanoparticles (including iron oxide) and does not report pharmacokinetic parameters for ferrous chloride. |
| PD | Kian_2026 | not_relevant | 0 | 0 | The paper describes the synthesis and characterization of nanoparticles (including iron oxide made from ferrous chloride) but does not report any pharmacodynamic or exposure-response analysis for ferrous chloride itself. |
| popPK | Kumari_2022 | irrelevant | 0 | 0 | The paper is a review on food fortification and does not report quantitative pharmacokinetic parameters for ferrous chloride. |
| popPK | Kwock_1984 | irrelevant | 2 | 0 | The study measures whole-body retention and tissue distribution of iron salts in mice, not pharmacokinetic parameters (CL, V, ka) for ferrous chloride as a drug. |
| popPK | Lee_2007 | irrelevant | 0 | 0 | The study investigates the antioxidant and neuroprotective effects of Osmanthus fragrans extract, using ferrous chloride only as a reagent to initiate lipid peroxidation, not as a subject drug for pharmacokinetic analysis. |
| popPK | Li_2026 | irrelevant | 0 | 0 | The study is an in-vitro physicochemical and cellular analysis of iron salts in milk, not a pharmacokinetic study reporting disposition parameters for ferrous chloride. |
| popPK | Li_2026_2 | irrelevant | 0 | 0 | The paper investigates the antimalarial activity of iron-loaded nanoparticles (PDA@Fe/P) and free FeCl2 in vitro and in mice, but does not report pharmacokinetic parameters (CL, V, t1/2) for ferrous chloride. |
| popPK | Oehlsen_2022 | irrelevant | 0 | 0 | The paper is a review on ferrofluid synthesis and applications, not a pharmacokinetic study of ferrous chloride. |
| PD | Oehlsen_2022 | not_relevant | 0 | 0 | The paper is a review on the synthesis and physical applications of ferrofluids (colloidal suspensions) and does not report any pharmacodynamic or exposure-response data for ferrous chloride as a drug. |
| popPK | Rupin_2011 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and efficacy of the thrombin inhibitor S35972, using ferrous chloride only as a chemical agent to induce arterial thrombosis in rats. |
| popPK | Shu_2021 | irrelevant | 0 | 0 | The paper is an environmental chemistry study on the metal mobility and toxicity of copper smelting fly ash and slag, not a pharmacokinetic study of ferrous chloride. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The study focuses on the in situ construction and in vitro characterization of a nano-iron oxide delivery system, not the pharmacokinetics of ferrous chloride. |
| popPK | Wang_2003 | irrelevant | 0 | 0 | The paper uses ferrous chloride (FeCl2) as a reagent to induce thrombosis in a rat model, not as a drug subject to pharmacokinetic analysis. |
| PD | Wang_2003 | not_relevant | 2 | 1 | The paper uses ferrous chloride (FeCl2) as a tool to induce a thrombus model, not as the drug of interest for which a pharmacodynamic exposure-response relationship is being characterized; the dose-response analysis is performed for tPA, not FeCl2. |
| popPK | Wang_2007 | irrelevant | 0 | 0 | The study is a microcalorimetric investigation of the toxic effect of iron species on bacteria, not a pharmacokinetic study of ferrous chloride in humans or animals. |
| popPK | Xu_2026 | irrelevant | 0 | 0 | The study focuses on the efficacy of iron supplementation and gut microbiota in mice, using ferrous chloride only as a comparator, and does not report pharmacokinetic parameters. |
| popPK | Yu_2017 | irrelevant | 0 | 0 | The study investigates arsenic mobility in soil and rice plants using iron compounds as amendments, not the pharmacokinetics of ferrous chloride in a biological subject. |
| popPK | Zhao_2024 | irrelevant | 0 | 0 | The study investigates the digestion and absorption of iron-chelating peptides in vitro, not the pharmacokinetics of ferrous chloride as a subject drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
