<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;veratrum&quot;}]"></div>

# veratrum

- **generic name:** veratrum
- **ATC codes:** `C02KA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 04:21 | 27:05 | 0/0/0 | 0/0/0 | 0/0/0 | 64,474/4,661 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 1/2 | 3/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 58 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_10 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2019.pdf` | Chen J et al., Quantitative determination of six stero…, Biomedical chromatography :… (2019) | popPK | 9 | [10.1002/bmc.4377](https://doi.org/10.1002/bmc.4377) | [30187929](https://pubmed.ncbi.nlm.nih.gov/30187929) | The paper describes a pharmacokinetic study of veratrum alkaloids in rats, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |
| `Chen_2019_2.pdf` | Chen L et al., A New UPLC-MS/MS Method Validated for Q…, Journal of analytical metho… (2019) | popPK | 9 | [10.1155/2019/5163625](https://doi.org/10.1155/2019/5163625) | [30956840](https://pubmed.ncbi.nlm.nih.gov/30956840) | The study reports quantitative pharmacokinetic parameters (CL/F, t1/2, AUC, Cmax) for jervine, a primary alkaloid of Veratrum, in rats. |
| `Wang_2022.pdf` | Wang S et al., Pharmacokinetics of Veratramine and Jer…, Computational and mathemati… (2022) | popPK | 9 | [10.1155/2022/8289548](https://doi.org/10.1155/2022/8289548) | [35785141](https://pubmed.ncbi.nlm.nih.gov/35785141) | The paper is a pharmacokinetic study of veratrum alkaloids in rats, but the specific numeric parameter values (CL, V, t1/2, etc.) are not listed in the provided text, only qualitative descriptions and method details. |
| `Zheng_2019.pdf` | Zheng B et al., Pharmacokinetics and enterohepatic circ…, Journal of pharmaceutical a… (2019) | popPK | 9 | [10.1016/j.jpha.2019.04.004](https://doi.org/10.1016/j.jpha.2019.04.004) | [31929946](https://pubmed.ncbi.nlm.nih.gov/31929946) | The paper is a pharmacokinetic study of jervine (a veratrum alkaloid) in rats, but the specific numeric parameter values are not present in the provided abstract text. |
| `Cong_2016.pdf` | Cong Y et al., Pharmacokinetics and metabolism study o…, Biomedical chromatography :… (2016) | popPK | 8 | [10.1002/bmc.3717](https://doi.org/10.1002/bmc.3717) | [26972867](https://pubmed.ncbi.nlm.nih.gov/26972867) | The paper describes a pharmacokinetic study of veratramine (a major component of Veratrum) in mice, but the provided evidence contains only method validation details and lacks the actual numeric PK parameter values (CL, V, etc.). |
| `Welch_2009.pdf` | Welch KD et al., Cyclopamine-induced synophthalmia in sh…, Journal of applied toxicolo… (2009) | popPK | 8 | [10.1002/jat.1427](https://doi.org/10.1002/jat.1427) | [19301244](https://pubmed.ncbi.nlm.nih.gov/19301244) | The study reports the elimination half-life of cyclopamine (the active alkaloid from Veratrum) in sheep, but other specific PK parameters like clearance or volume are not explicitly quantified in the provided text. |
| `Cai_2018.pdf` | Cai X et al., Insecticidal and Acetylcholinesterase I…, Journal of arthropod-borne… (2018) | pd | 5 | not captured | [30918910](https://www.ncbi.nlm.nih.gov/pubmed/30918910) | metadata signals extractable PD data (IC50) |
| `Cong_2008.pdf` | Cong Y et al., A study on the chemical constituents of…, Journal of Asian natural pr… (2008) | pd | 4 | [10.1080/10286020802133266](https://doi.org/10.1080/10286020802133266) | [18636372](https://www.ncbi.nlm.nih.gov/pubmed/18636372) | metadata signals extractable PD data (IC50) |
| `Crawford_1993.pdf` | Crawford L et al., Steroidal alkaloid toxicity to fish emb…, Toxicology letters (1993) | pd | 4 | [10.1016/0378-4274(93)90092-c](https://doi.org/10.1016/0378-4274(93)90092-c) | [8430437](https://www.ncbi.nlm.nih.gov/pubmed/8430437) | metadata signals extractable PD data (EC50) |
| `Gao_2016.pdf` | Gao L et al., Three new alkaloids from Veratrum grand…, Bioorganic & medicinal chem… (2016) | pd | 4 | [10.1016/j.bmcl.2016.08.040](https://doi.org/10.1016/j.bmcl.2016.08.040) | [27567371](https://www.ncbi.nlm.nih.gov/pubmed/27567371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-28T04:16:14.251575+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | ABREU_1954 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters required to extract a pharmacodynamic relationship. |
| popPK | Bapat_2026 | irrelevant | 0 | 0 | The paper is a review of steroidal alkaloids in cardiovascular diseases and does not report quantitative pharmacokinetic parameters for veratrum. |
| PD | Bapat_2026 | not_relevant | 1 | 0 | The text is a review article that qualitatively discusses pharmacodynamics and dose-response relationships but does not report specific numeric PD parameters or extractable concentration-effect data for veratrum. |
| popPK | CHAUDHRI_1959 | irrelevant | 1 | 0 | The study focuses on the renal and hemodynamic effects (antidiuresis, hypotension) of veratridine rather than reporting quantitative pharmacokinetic disposition parameters like clearance, volume, or half-life. |
| popPK | Chen_2019 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of veratrum alkaloids in rats, but the specific quantitative parameter values (CL, V, etc.) are not present in the provided evidence text. |
| popPK | Cong_2016 | relevant | 8 | 0 | The paper describes a pharmacokinetic study of veratramine (a major component of Veratrum) in mice, but the provided evidence contains only method validation details and lacks the actual numeric PK parameter values (CL, V, etc.). |
| popPK | Crawford_1993 | irrelevant | 0 | 0 | The study is a toxicology assessment of steroidal alkaloids (including jervine) on fish embryos, reporting EC50 values rather than pharmacokinetic parameters for veratrum. |
| PD | Crawford_1993 | not_relevant | 4 | 0 | The paper reports EC50 values for jervine (a Veratrum alkaloid) in fish embryos, but the specific numeric values are not provided in the text, making them non-extractable from the given content. |
| popPK | Divinetz_1984 | irrelevant | 0 | 0 | The study investigates PGE2 release in cats using veratridine as a depolarizing agent, not the pharmacokinetics of veratrum. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a risk assessment of glycoalkaloids (solanine/chaconine) in food, not a pharmacokinetic study of veratrum. |
| PD | EFSA_2020 | not_relevant | 1 | 0 | The paper is a risk assessment for glycoalkaloids (solanine/chaconine) in potatoes, not veratrum, and only identifies a qualitative LOAEL without deriving specific PD parameters like Emax or EC50. |
| popPK | Eswaran_2026 | irrelevant | 0 | 0 | The study focuses on the in-silico and in-vitro anticancer mechanisms of jervine (a veratrum alkaloid) and does not report quantitative population pharmacokinetic parameters (CL, V, etc.) for veratrum. |
| popPK | Fahim_1979 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of veratrum alkaloids on atrial receptors in cats (mechanistic/pharmacodynamic) and does not report any pharmacokinetic parameters. |
| popPK | GALNARES_1956 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Ganamurali_2026 | irrelevant | 0 | 0 | The paper is a review focusing on the gut microbiome and steroidal alkaloids, with no original quantitative pharmacokinetic parameters reported for veratrum. |
| popPK | Hasan_2025 | irrelevant | 2 | 0 | The study focuses on the therapeutic efficacy and mechanism of veratridine delivery in cancer models, mentioning improved pharmacokinetics qualitatively but providing no quantitative PK parameters (CL, V, etc.) in the evidence. |
| popPK | King_1990 | irrelevant | 0 | 0 | The paper is a review of emetic responses in animal models and does not report pharmacokinetic parameters for veratrum. |
| PD | King_1990 | not_relevant | 3 | 0 | The text is an abstract describing a comparative study of emetic dose-response relations and mentions Veratrum alkaloids, but it does not provide specific numeric PD parameters (ED50, ED100, etc.) for Veratrum in this excerpt. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | The paper is a review of resveratrol (RSV) as an anti-cancer agent, not a pharmacokinetic study of veratrum (the plant source), and does not report quantitative PK parameters for veratrum. |
| PD | Kumar_2022 | not_relevant | 0 | 0 | The paper is a review of resveratrol (not veratrum) and its nano-formulations, focusing on general mechanisms and PK properties without reporting specific numeric PD parameters or exposure-response models. |
| popPK | Lipinski_2008 | irrelevant | 2 | 0 | The study focuses on cyclopamine (a specific Veratrum alkaloid) rather than the drug "veratrum" itself, and it reports only steady-state concentrations without providing quantitative compartmental PK parameters like clearance or volume. |
| PGx | Liu_2019 | not_relevant | 0 | 0 | The paper studies the interaction between jervine (a compound from Veratrum) and doxorubicin, not the pharmacogenomics of Veratrum itself. |
| PGx | Lyu_2015 | not_relevant | 0 | 0 | The paper characterizes the metabolic pathways of veratramine using recombinant enzymes and animal models, but does not report pharmacogenomic effects (gene variant/genotype differences) on PK or PD parameters. |
| popPK | MEILMAN_1952 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | McKillop_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of cutaneous paraesthesia in guinea pigs and does not report any pharmacokinetic parameters for veratrum. |
| popPK | Minchin_1980 | irrelevant | 0 | 0 | The paper is a mechanistic study on neurotransmitter release in rat brain slices, not a pharmacokinetic study, and contains no disposition parameters for veratrum. |
| popPK | Omnell_1990 | irrelevant | 0 | 0 | The study is a teratogenicity assessment of jervine (a Veratrum alkaloid) and does not report any pharmacokinetic parameters. |
| PD | Omnell_1990 | not_relevant | 4 | 2 | The paper reports a dose-response relationship (teratogenicity vs. dose) for jervine in mice, but the provided text only contains qualitative descriptions of the effects and does not provide the specific numeric data (e.g., incidence rates, EC50, or specific defect percentages per dose) required to derive numeric PD parameters. |
| PD | PETKOV_1959 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to assess pharmacodynamics. |
| PD | Petkov_1966 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| PD | ROLSKI_1954 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Ramdas_2020 | irrelevant | 0 | 0 | The paper focuses on NaV1.7 inhibitors for pain, and veratridine is used only as a tool compound to induce pain models, not as the subject drug for PK parameter extraction. |
| popPK | Salaga_2021 | irrelevant | 0 | 0 | The study focuses on FFAR agonists in colitis models and uses veratridine (not veratrum) only as a tool compound to stimulate ion transport, with no PK parameters reported. |
| PD | Taldaev_2022 | not_relevant | 3 | 2 | The paper reports qualitative associations between blood concentrations and clinical severity in a small case series and provides in-silico IC50 values, but it does not present a formal PK/PD model or extractable numeric exposure-response parameters (e.g., EC50, Emax) for the clinical data. |
| popPK | Verbny_2002 | irrelevant | 0 | 0 | The study is a mechanistic electrophysiology paper on calcium homeostasis in mouse optic nerves, not a pharmacokinetic study of veratrum. |
| popPK | Wang_2022 | relevant | 9 | 2 | The paper is a pharmacokinetic study of veratrum alkaloids in rats, but the specific numeric parameter values (CL, V, t1/2, etc.) are not listed in the provided text, only qualitative descriptions and method details. |
| PD | Xu_2018 | not_relevant | 3 | 2 | The study reports qualitative dose-response effects (e.g., VN decreases SM's estrogenic activity) but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve for veratrum. |
| PD | Xu_2019 | not_relevant | 2 | 1 | The paper describes qualitative pharmacodynamic interactions (antagonism of estrogenic effects) but does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or PK/PD modeling data. |
| popPK | Zhao_2024 | irrelevant | 2 | 0 | The paper is a comprehensive review of Veratrum nigrum that summarizes existing pharmacokinetic studies but does not report original quantitative disposition parameters or numeric values in the provided evidence. |
| popPK | Zheng_2019 | relevant | 9 | 0 | The paper is a pharmacokinetic study of jervine (a veratrum alkaloid) in rats, but the specific numeric parameter values are not present in the provided abstract text. |
| PD | Zhou_2023 | not_relevant | 2 | 1 | The paper reports qualitative hypotensive effects and metabolomic biomarkers but does not provide numeric concentration-effect or dose-response parameters (e.g., Emax, EC50) or a formal PK/PD model. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
