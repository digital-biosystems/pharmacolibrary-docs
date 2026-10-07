<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;ethenzamide&quot;}]"></div>

# ethenzamide

- **generic name:** ethenzamide
- **ATC codes:** `N02BA07`
- **DrugBank:** [DB13544](https://go.drugbank.com/drugs/DB13544) · **PubChem:** not captured
- **molar mass:** 165.192 g/mol (C9H11NO2) — DrugBank
- **groups:** investigational

## About

Ethenzamide is a salicylic acid derivative with pain-relieving and fever-reducing (anti-inflammatory) properties. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q553324](https://www.wikidata.org/wiki/Q553324) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:07 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 11,179/186 | einfracz / qwen3.8-27b | 16 | 11/4 | 16/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Asada_1989 | irrelevant | 0 | 0 | The provided evidence is empty/metadata and contains no data regarding ethenzamide. |
| popPK | Darias_1992 | irrelevant | 0 | 0 | The paper is a preliminary pharmacological study of analogues focusing on efficacy and toxicity, with no pharmacokinetic parameters reported for ethenzamide. |
| popPK | Frank_2019 | irrelevant | 0 | 0 | The paper is a physicochemical study on the stability of amorphous solid dispersions and does not report pharmacokinetic parameters for ethenzamide. |
| popPK | Fukunaka_2006 | irrelevant | 0 | 0 | The paper investigates the mechanical grinding kinetics and particle size distribution of ethenzamide, not its pharmacokinetic disposition parameters. |
| popPK | Fukunaka_2006_2 | irrelevant | 0 | 0 | The paper investigates the physical grinding kinetics and particle size distribution of ethenzamide, not its pharmacokinetic disposition parameters. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The paper is an environmental monitoring study measuring ethenzamide concentrations in seawater, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hirakawa_2020 | irrelevant | 0 | 0 | The study focuses on in vitro transdermal permeation and physical stability of a supercooled liquid formulation, reporting flux values rather than systemic pharmacokinetic parameters (CL, V, ka) for ethenzamide. |
| popPK | Hsu_2020 | irrelevant | 0 | 0 | The paper is a formulation study on microparticle production using RESS and reports no pharmacokinetic parameters. |
| popPK | Iwao_2015 | irrelevant | 0 | 0 | The study is an in-vitro dissolution analysis focusing on surface area parameters (S(t)) for excipient evaluation, not a pharmacokinetic study reporting disposition parameters like clearance or volume for ethenzamide. |
| popPK | Kawano_1978 | irrelevant | 0 | 0 | The paper focuses on pharmacodynamic interactions (gastric protection, analgesic potency) and safety margins, reporting no quantitative pharmacokinetic parameters for ethenzamide. |
| popPK | Kozak_2019 | irrelevant | 0 | 0 | The paper is a solid-state spectroscopic study of cocrystal formation and does not report any pharmacokinetic parameters. |
| popPK | Kozak_2019_2 | irrelevant | 0 | 0 | The paper is a structural and physicochemical characterization study of ethenzamide cocrystals, reporting no pharmacokinetic parameters. |
| popPK | Kumagai_2006 | irrelevant | 0 | 0 | The paper is an environmental toxicology study on activated sludge oxygen uptake inhibition, not a pharmacokinetic study, and ethenzamide is only one of many drugs tested for environmental fate. |
| PD | Kumagai_2006 | not_relevant | 1 | 0 | The paper reports a qualitative classification of ethenzamide as having negligible oxygen uptake rate inhibition (IC50 &gt; 2000 mg/l) in activated sludge, but does not provide specific numeric PD parameters or a detailed dose-response curve for ethenzamide. |
| popPK | Matsunami_2020 | irrelevant | 0 | 0 | The paper focuses on continuous wet granulation process parameters and tablet quality, not pharmacokinetic disposition parameters for ethenzamide. |
| popPK | Matsuoka_1979 | irrelevant | 0 | 0 | The paper is an in-vitro genotoxicity study (chromosomal aberration test) and does not report any pharmacokinetic parameters for ethenzamide. |
| popPK | Moribe_2004 | irrelevant | 0 | 0 | The paper is a solid-state chemistry study on the formation of a thiourea-ethenzamide complex, containing no pharmacokinetic data. |
| popPK | Naito_1986 | irrelevant | 0 | 0 | The paper is a carcinogenicity study in mice and does not report any pharmacokinetic parameters for ethenzamide. |
| PD | Naito_1986 | not_relevant | 2 | 1 | The paper reports a qualitative dose-response relationship for carcinogenicity (tumor incidence/multiplicity) but does not provide numeric PD parameters (e.g., EC50, Emax) or a concentration-effect curve. |
| popPK | Nakamura_1987 | irrelevant | 2 | 0 | The study focuses on intestinal first-pass metabolism of multiple drugs including ethenzamide in rabbits, likely reporting metabolic ratios or clearance rather than a full compartmental PK model with volume parameters, and no numeric values are present in the evidence. |
| popPK | Nikaido_2020 | irrelevant | 0 | 0 | The study focuses on the mechanism of action (5HT2B receptor binding) and pharmacodynamics (analgesic effect in rat formalin test) of ethenzamide, reporting no quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Nikaido_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of gastric motility and mucosal damage, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for ethenzamide. |
| popPK | OSullivan_2024 | irrelevant | 0 | 0 | The paper is a materials science study on cocrystal polymorph selection and contains no pharmacokinetic data or disposition parameters for ethenzamide. |
| popPK | Okamoto_1985 | irrelevant | 0 | 0 | The paper describes a forensic toxicology case and analytical method (GC-MS) for detecting ethenzamide, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Podder_1988 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content regarding ethenzamide pharmacokinetics. |
| popPK | Przybyłek_2016 | irrelevant | 0 | 0 | The paper is a crystallographic study on cocrystallization and contains no pharmacokinetic data or disposition parameters for ethenzamide. |
| popPK | Przybyłek_2022 | irrelevant | 0 | 0 | The paper is a physicochemical study on solubility and solvent selection, not a pharmacokinetic study, and contains no PK parameters for ethenzamide. |
| popPK | Shibasaki_1984 | irrelevant | 0 | 0 | The provided evidence contains only metadata and software version information, with no pharmacokinetic data or text regarding ethenzamide. |
| popPK | Tagami_1982 | irrelevant | 0 | 0 | The paper describes a chemical analysis method for determining drug concentration, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Takayasu_1993 | irrelevant | 0 | 0 | The paper is a forensic case report of a fatal overdose that reports only post-mortem tissue concentrations, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for ethenzamide. |
| popPK | Tanaka_2001 | irrelevant | 0 | 0 | Ethenzamide is used only as an internal standard for HPLC analysis; the study reports pharmacokinetic parameters for bromvalerylurea in rats, not for ethenzamide. |
| popPK | Trzeciak_2023 | irrelevant | 0 | 0 | The paper is a solid-state chemistry and formulation study focusing on amorphization and in-vitro dissolution, containing no pharmacokinetic parameters or in-vivo disposition data. |
| popPK | Wan_2022 | irrelevant | 0 | 0 | The paper is a solid-state chemistry study on ethenzamide cocrystals using spectroscopy and DFT, containing no pharmacokinetic data. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The paper describes the isolation and structural characterization of a novel indole-3-ethenamide natural product, not the pharmacokinetics of the drug ethenzamide. |
| popPK | Zhang_2024 | irrelevant | 0 | 0 | The paper is a solid-state chemistry study on cocrystal polymorphs using spectroscopy and contains no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
