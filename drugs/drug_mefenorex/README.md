<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A08A&quot;,&quot;href&quot;:&quot;atc/A08A.md&quot;},{&quot;label&quot;:&quot;mefenorex&quot;}]"></div>

# mefenorex

- **generic name:** mefenorex
- **ATC codes:** `A08AA09`
- **DrugBank:** [DB13852](https://go.drugbank.com/drugs/DB13852)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-12 01:17 | 11:37 | 0/0/0 | 0/0/0 | 0/0/0 | 117,680/6,763 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 0/0 | 11/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 18 matched, 46 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Rendić_1994.pdf` | Rendić S et al., Urinary excretion and metabolism of ora…, European journal of drug me… (1994) | popPK | 8 | [10.1007/BF03188831](https://doi.org/10.1007/BF03188831) | [8001591](https://pubmed.ncbi.nlm.nih.gov/8001591) | The study reports quantitative pharmacokinetic parameters (Kel, t1/2) for mefenorex in humans, with values explicitly provided in the text. |

<sub>queue written 2026-09-12T01:17:23.546727+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allen_2019 | irrelevant | 0 | 0 | The paper is a mathematical study on Wigner rotation matrix elements and contains no pharmacokinetic data for mefenorex. |
| popPK | Beyer_1980 | irrelevant | 0 | 0 | The provided evidence contains only the title of a clinical treatment study with no pharmacokinetic data or numeric parameters. |
| popPK | Brook_2024 | irrelevant | 0 | 0 | The paper is a review on medical morbidity and mortality conferences and contains no pharmacokinetic data for mefenorex. |
| popPK | Casado_2021 | irrelevant | 0 | 0 | The paper is a sports science study on running pacing profiles and contains no pharmacokinetic data or mention of mefenorex. |
| popPK | Cave_1990 | irrelevant | 0 | 0 | The paper studies the toxicity of m-dinitrobenzene in rat cell cultures and does not involve mefenorex or pharmacokinetic parameters. |
| popPK | Chen_2022 | irrelevant | 0 | 0 | The paper is a clinical oncology study on lung adenocarcinoma recurrence and contains no pharmacokinetic data or mention of mefenorex. |
| popPK | Chinombe_2016 | irrelevant | 0 | 0 | The paper is a microbiology study on the molecular identification of nontuberculous mycobacteria and contains no pharmacokinetic data for mefenorex. |
| popPK | Cody_1993 | irrelevant | 0 | 0 | The paper is a review of metabolic precursors to amphetamines and does not report original quantitative pharmacokinetic parameters for mefenorex. |
| popPK | Dai_2018 | irrelevant | 0 | 0 | The paper is a genetic study on Leber's hereditary optic neuropathy (LHON) and does not involve the drug mefenorex or pharmacokinetic parameters. |
| popPK | Del-Valle-Soto_2017 | irrelevant | 0 | 0 | The paper is about wireless sensor network routing protocols and jamming attacks, not pharmacokinetics of mefenorex. |
| popPK | Donohue_2021 | irrelevant | 0 | 0 | The paper is an epidemiological study of Nontuberculous Mycobacteria and does not involve the drug mefenorex or pharmacokinetic parameters. |
| popPK | Engel_1986 | irrelevant | 0 | 0 | The text is a regulatory summary regarding the scheduling status and safety profile of mefenorex, containing no pharmacokinetic data or quantitative disposition parameters. |
| popPK | Evans_1987 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in pigeons assessing discriminative stimulus properties, not a pharmacokinetic study, and reports no disposition parameters for mefenorex. |
| popPK | Fooden_1985 | irrelevant | 0 | 0 | The paper is a zoological study on macaque species and contains no pharmacokinetic data for mefenorex. |
| popPK | Frogley_2018 | irrelevant | 0 | 0 | The paper is a chemistry study on organotellurium compounds and contains no information regarding mefenorex or pharmacokinetics. |
| popPK | Grange_1981 | irrelevant | 0 | 0 | The paper discusses the taxonomy of Mycobacterium chelonei and contains no information regarding mefenorex or pharmacokinetics. |
| popPK | Ibar_2024 | irrelevant | 0 | 0 | The paper is a study on the rheology of polymer melts (polystyrene) and does not involve the drug mefenorex or pharmacokinetics. |
| popPK | Jurado-Bruggeman_2023 | irrelevant | 0 | 0 | The paper is a radiotherapy physics study regarding dose calculation algorithms and does not involve the drug mefenorex or pharmacokinetics. |
| popPK | Kovalev_1993 | irrelevant | 0 | 0 | The paper is a microbiological study on mycobacterial differentiation and contains no pharmacokinetic data for mefenorex. |
| popPK | Kraemer_1997 | irrelevant | 2 | 0 | The study focuses on metabolic identification and toxicological detection methods (GC-MS/FPIA) rather than reporting quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Kraemer_2002 | irrelevant | 2 | 0 | The paper is a review of toxicokinetics for various amphetamines including mefenorex, but the provided evidence contains no original quantitative PK parameter values. |
| popPK | Landers_1973 | irrelevant | 0 | 0 | The paper is a psychology study on motor learning and social modeling, containing no pharmacokinetic data for mefenorex. |
| popPK | Musshoff_2000 | irrelevant | 0 | 0 | The paper is a review of precursor compounds and metabolic profiles, containing no original pharmacokinetic data or quantitative disposition parameters for mefenorex. |
| popPK | Nakahara_1995 | irrelevant | 0 | 0 | The paper is a review on the detection of amphetamines in hair and does not report quantitative pharmacokinetic parameters for mefenorex. |
| popPK | Nakahara_1996 | irrelevant | 1 | 0 | The study focuses on hair incorporation rates (ICR) and structural effects, not standard pharmacokinetic parameters like clearance or volume of distribution for mefenorex. |
| popPK | Nazarali_1983 | irrelevant | 2 | 0 | The study focuses on the metabolism (N-dealkylation) of mefenorex in rat brain rather than reporting quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| popPK | Netter_1978 | irrelevant | 0 | 0 | The study is a psychophysiological investigation of behavioral effects and does not report any pharmacokinetic parameters for mefenorex. |
| popPK | Nordberg_1984 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of morphine, not mefenorex. |
| popPK | O_2019 | irrelevant | 0 | 0 | The paper studies polyphenols in Mammillaria cacti and contains no information regarding mefenorex or its pharmacokinetics. |
| popPK | Orosco_1995 | irrelevant | 0 | 0 | The study investigates the mechanism of action (serotonin release) in vitro and in vivo, not pharmacokinetic disposition parameters. |
| popPK | Polaszek_2022 | irrelevant | 0 | 0 | The paper is a taxonomic revision of the insect genus Megaphragma and contains no pharmacokinetic data for mefenorex. |
| popPK | Rogall_1990 | irrelevant | 0 | 0 | The paper is a phylogenetic study of Mycobacterium species and contains no pharmacokinetic data for mefenorex. |
| popPK | Santucci_1995 | irrelevant | 0 | 0 | The paper studies nickel/magnesium interactions in patch tests and does not involve mefenorex or pharmacokinetics. |
| popPK | Schaerli_2018 | irrelevant | 0 | 0 | The paper is a biomechanical study on knife injuries and contains no pharmacokinetic data for mefenorex. |
| popPK | Schulze-Röbbecke_1992 | irrelevant | 0 | 0 | The paper investigates the heat susceptibility of aquatic mycobacteria and does not involve mefenorex or pharmacokinetics. |
| popPK | Sei_2012 | irrelevant | 0 | 0 | The paper is a review of Malassezia infections (dermatology) and does not contain any pharmacokinetic data or mention of mefenorex. |
| popPK | Seiler_1976 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of pulmonary vascular resistance and serotonin metabolism, not a pharmacokinetic study reporting disposition parameters for mefenorex. |
| popPK | Shimamine_1992 | irrelevant | 0 | 0 | The paper is an analytical chemistry study focused on the preparation and identification of reference standards, containing no pharmacokinetic data. |
| popPK | Strano-Rossi_2012 | irrelevant | 0 | 0 | The paper describes an analytical method for detecting mefenorex in oral fluid and does not report any pharmacokinetic parameters. |
| popPK | Terzano_1977 | irrelevant | 0 | 0 | The paper is a clinical review of Petit mal status epilepticus and does not contain any pharmacokinetic data for mefenorex. |
| popPK | Vincendeau_1970 | irrelevant | 0 | 0 | The provided evidence contains only the title and no pharmacokinetic data or quantitative parameters for mefenorex. |
| popPK | Wittels_2017 | irrelevant | 0 | 0 | The paper is a survey on emergency medicine morbidity and mortality conferences and contains no pharmacokinetic data for mefenorex. |
| popPK | Yohanathan_2021 | irrelevant | 0 | 0 | The paper is a surgical oncology study on hilar cholangiocarcinoma and does not involve mefenorex or pharmacokinetics. |
| popPK | de_1987 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study on discriminative stimulus properties in monkeys, not a pharmacokinetic study, and mefenorex is only a comparator drug. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | The paper is a global biogeography study on earthworm diversity and contains no information regarding the drug mefenorex or its pharmacokinetics. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
