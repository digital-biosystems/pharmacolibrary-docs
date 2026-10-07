<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02K&quot;,&quot;href&quot;:&quot;atc/C02K.md&quot;},{&quot;label&quot;:&quot;veratrum&quot;}]"></div>

# veratrum

- **generic name:** veratrum
- **ATC codes:** `C02KA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Veratrum alkaloids were once used as antihypertensive drugs to lower high blood pressure. They are no longer used in modern medicine because safer and more reliable blood pressure medicines replaced them.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:33 | 1:33 | 0/0/0 | 0/0/0 | 0/0/0 | 81,333/5,882 | einfracz / qwen3.8-27b | 6 | 1/5 | 6/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 58 matched, 58 returned
- **screened:** 5  ·  **relevant:** 4
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_2019.pdf` | Chen J et al., Quantitative determination of six stero…, Biomedical chromatography :… (2019) | popPK | 9 | [10.1002/bmc.4377](https://doi.org/10.1002/bmc.4377) | [30187929](https://pubmed.ncbi.nlm.nih.gov/30187929) | The paper is a PK study of veratrum alkaloids (veratrosine, etc.) in rats, but no numeric PK parameters (CL, V, etc.) are present in the provided text. |
| `Cong_2016.pdf` | Cong Y et al., Pharmacokinetics and metabolism study o…, Biomedical chromatography :… (2016) | popPK | 8 | [10.1002/bmc.3717](https://doi.org/10.1002/bmc.3717) | [26972867](https://pubmed.ncbi.nlm.nih.gov/26972867) | The paper reports a PK study of veratramine in mice, but the evidence text (abstract) describes the analytical method and metabolite identification without providing specific numeric PK parameters (CL, Vd, t1/2), which likely reside in the full text or figures not included here. |
| `Welch_2009.pdf` | Welch KD et al., Cyclopamine-induced synophthalmia in sh…, Journal of applied toxicolo… (2009) | popPK | 8 | [10.1002/jat.1427](https://doi.org/10.1002/jat.1427) | [19301244](https://pubmed.ncbi.nlm.nih.gov/19301244) | The study reports quantitative toxicokinetic data for cyclopamine (the active steroidal alkaloid from Veratrum) in sheep, specifically providing the elimination half-life. |
| `Cong_2008.pdf` | Cong Y et al., A study on the chemical constituents of…, Journal of Asian natural pr… (2008) | pd | 4 | [10.1080/10286020802133266](https://doi.org/10.1080/10286020802133266) | [18636372](https://www.ncbi.nlm.nih.gov/pubmed/18636372) | metadata signals extractable PD data (IC50) |
| `Crawford_1993.pdf` | Crawford L et al., Steroidal alkaloid toxicity to fish emb…, Toxicology letters (1993) | pd | 4 | [10.1016/0378-4274(93)90092-c](https://doi.org/10.1016/0378-4274(93)90092-c) | [8430437](https://www.ncbi.nlm.nih.gov/pubmed/8430437) | metadata signals extractable PD data (EC50) |
| `Gao_2016.pdf` | Gao L et al., Three new alkaloids from Veratrum grand…, Bioorganic & medicinal chem… (2016) | pd | 4 | [10.1016/j.bmcl.2016.08.040](https://doi.org/10.1016/j.bmcl.2016.08.040) | [27567371](https://www.ncbi.nlm.nih.gov/pubmed/27567371) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T15:33:00.097443+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | ABREU_1954 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| PD | ABREU_1954 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text or any numeric data, curves, or parameters required to extract a pharmacodynamic relationship. |
| popPK | Bapat_2026 | irrelevant | 0 | 0 | This is a review article on steroidal alkaloids in cardiovascular diseases, and veratrum is not the subject of any PK modeling or parameter reporting in the provided text. |
| PD | Bapat_2026 | not_relevant | 1 | 0 | The text is a review article that qualitatively discusses pharmacodynamics and dose-response relationships but does not report specific numeric PD parameters or extractable concentration-effect data for veratrum. |
| popPK | CHAUDHRI_1959 | irrelevant | 1 | 0 | The paper is a pharmacodynamic study of veratridine (a specific alkaloid, distinct from the "veratrum" plant extract often used in PK contexts) in rats, reporting dose-response and renal clearance of markers (inulin/PAP), not the quantitative PK parameters (CL, V, t1/2) of veratrum itself. |
| popPK | Cai_2018 | irrelevant | 0 | 0 | no_text gate: only 146 chars of text extracted (&lt; 400) |
| popPK | Chen_2019 | relevant | 9 | 0 | The paper is a PK study of veratrum alkaloids (veratrosine, etc.) in rats, but no numeric PK parameters (CL, V, etc.) are present in the provided text. |
| popPK | Cong_2008 | irrelevant | 0 | 0 | The paper is a phytochemical study on chemical constituents and cytotoxicity, not a pharmacokinetic study. |
| popPK | Cong_2016 | relevant | 8 | 0 | The paper reports a PK study of veratramine in mice, but the evidence text (abstract) describes the analytical method and metabolite identification without providing specific numeric PK parameters (CL, Vd, t1/2), which likely reside in the full text or figures not included here. |
| popPK | Crawford_1993 | irrelevant | 0 | 0 | no_text gate: only 43 chars of text extracted (&lt; 400) |
| PD | Crawford_1993 | not_relevant | 4 | 0 | The paper reports EC50 values for jervine (a Veratrum alkaloid) in fish embryos, but the specific numeric values are not provided in the text, making them non-extractable from the given content. |
| popPK | Diamant_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neurotransmitter release using veratridine as a depolarizing agent, not a pharmacokinetic study of veratrum. |
| popPK | Divinetz_1984 | irrelevant | 0 | 0 | The study investigates the mechanism of PGE2 release in cats using veratridine as a depolarizing agent, rather than reporting pharmacokinetic disposition parameters for veratrum. |
| popPK | EFSA_2020 | irrelevant | 0 | 0 | The paper is a toxicological risk assessment of glycoalkaloids and does not report pharmacokinetic parameters for veratrum. |
| PD | EFSA_2020 | not_relevant | 1 | 0 | The paper is a risk assessment for glycoalkaloids (solanine/chaconine) in potatoes, not veratrum, and only identifies a qualitative LOAEL without deriving specific PD parameters like Emax or EC50. |
| popPK | Eswaran_2026 | irrelevant | 0 | 0 | The study investigates the anticancer mechanism of jervine (a different drug) in vitro, not the population pharmacokinetics of veratrum. |
| popPK | Fahim_1979 | irrelevant | 0 | 0 | The study is a pharmacological investigation of atrial receptor sensitivity and threshold doses, not a pharmacokinetic study of disposition parameters. |
| popPK | Fan_2011 | irrelevant | 2 | 1 | The study focuses on the pharmacological efficacy and toxicity of cyclopamine (a Veratrum alkaloid) rather than providing a quantitative population pharmacokinetic model or standard disposition parameters (CL, V, Q) for the drug itself. |
| popPK | GALNARES_1956 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| popPK | Ganamurali_2026 | irrelevant | 0 | 0 | The paper is a review of nitrogen-containing steroidal alkaloids and the gut microbiome, mentioning veratramine as a case study but providing no quantitative pharmacokinetic parameters or compartmental models. |
| popPK | Gao_2016 | irrelevant | 0 | 0 | The paper is a phytochemical and mechanistic study on alkaloids from Veratrum grandiflorum, reporting no pharmacokinetic parameters. |
| popPK | Gao_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on the anti-proliferative effects of Veratrum alkaloids in cell lines and does not report any pharmacokinetic parameters. |
| popPK | Hasan_2025 | irrelevant | 2 | 0 | The study focuses on the therapeutic efficacy and nanoparticle delivery mechanism of veratridine in mice, mentioning improved pharmacokinetics only qualitatively without reporting specific quantitative disposition parameters like clearance or volume. |
| popPK | Hong_2023 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro biological activity study (enzyme inhibition) with no pharmacokinetic parameters reported. |
| popPK | King_1990 | irrelevant | 0 | 0 | The paper is a review of emetic responses and dose-response relations in animal models, focusing on the emetic potency of Veratrum alkaloids rather than their pharmacokinetic disposition parameters. |
| PD | King_1990 | not_relevant | 3 | 0 | The text is an abstract describing a comparative study of emetic dose-response relations and mentions Veratrum alkaloids, but it does not provide specific numeric PD parameters (ED50, ED100, etc.) for Veratrum in this excerpt. |
| popPK | Kumar_2022 | irrelevant | 0 | 0 | The paper is a review regarding resveratrol, which is a different drug from veratrum. |
| PD | Kumar_2022 | not_relevant | 0 | 0 | The paper is a review of resveratrol (not veratrum) and its nano-formulations, focusing on general mechanisms and PK properties without reporting specific numeric PD parameters or exposure-response models. |
| popPK | Lipinski_2008 | relevant | 4 | 1 | The study reports PK models and steady-state concentrations for cyclopamine (a Veratrum alkaloid), but specific clearance/volume parameter values are not explicitly listed in the text provided. |
| PGx | Liu_2019 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (jervine modulating doxorubicin transport) and does not report any pharmacogenomic effects of gene variants on veratrum PK/PD parameters. |
| PGx | Lyu_2015 | not_relevant | 1 | 3 | The paper reports on the general metabolic profile of veratramine in rats, identifying CYP2D6 and SULT2A1 as major enzymes, but it does not report pharmacogenomic differences (genotype-based PK/PD changes) in a human population. |
| popPK | MEILMAN_1952 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| popPK | McKillop_1987 | irrelevant | 0 | 0 | The paper describes a pharmacodynamic study of pyrethroid-induced paraesthesia in guinea pigs using veratrine as a comparator agent, not a pharmacokinetic study. |
| popPK | Minchin_1980 | irrelevant | 0 | 0 | The study investigates the mechanism of GABA release in rat brain slices using an in-vitro model and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Omnell_1990 | irrelevant | 0 | 0 | The study is a teratology investigation of jervine (a Veratrum alkaloid) in mice and reports no pharmacokinetic parameters. |
| PD | Omnell_1990 | not_relevant | 4 | 2 | The paper reports a dose-response relationship (teratogenicity vs. dose) for jervine in mice, but the provided text only contains qualitative descriptions of the effects and does not provide the specific numeric data (e.g., incidence rates, EC50, or specific defect percentages per dose) required to derive numeric PD parameters. |
| popPK | PETKOV_1959 | irrelevant | 0 | 0 | no_text gate: only 72 chars of text extracted (&lt; 400) |
| PD | PETKOV_1959 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, analysis, or numeric parameters to assess pharmacodynamics. |
| popPK | Petkov_1966 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Petkov_1966 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | ROLSKI_1954 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | ROLSKI_1954 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the pharmacodynamic relationship. |
| popPK | Ramdas_2020 | irrelevant | 0 | 0 | The paper focuses on NaV1.7 inhibitors for pain, using veratridine only as a vehicle to induce a pain model, rather than studying the pharmacokinetics of veratrum/veratridine itself. |
| popPK | Salaga_2021 | irrelevant | 0 | 0 | The paper studies free fatty acid receptor agonists in mouse colitis models and uses veratridine (a tool compound) for ion transport measurements, but does not report pharmacokinetic parameters for veratrum. |
| popPK | Taldaev_2022 | irrelevant | 1 | 0 | The study focuses on cardiotoxic mechanisms and molecular docking rather than pharmacokinetic disposition parameters, and no PK values are reported. |
| PD | Taldaev_2022 | not_relevant | 3 | 2 | The paper reports qualitative associations between blood concentrations and clinical severity in a small case series and provides in-silico IC50 values, but it does not present a formal PK/PD model or extractable numeric exposure-response parameters (e.g., EC50, Emax) for the clinical data. |
| popPK | Verbny_2002 | irrelevant | 0 | 0 | The study focuses on the neurophysiological coupling of calcium and sodium homeostasis in mouse axons, using veratridine (a structural isomer of the drug target) as a tool, and contains no pharmacokinetic parameters. |
| popPK | Wang_2022 | relevant | 9 | 2 | The study is a pharmacokinetic investigation of veratramine and jervine (active alkaloids of veratrum) in rats, but the specific numeric PK parameter values are contained in Table 5 and Figure 3/4, which are not included in the provided evidence text. |
| popPK | Xu_2018 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics and mechanism of estrogenic activity, not pharmacokinetic parameters for veratrum. |
| PD | Xu_2018 | not_relevant | 3 | 2 | The study reports qualitative dose-response effects (e.g., VN decreases SM's estrogenic activity) but does not provide numeric PD parameters (Emax, EC50) or a fitted concentration-effect curve for veratrum. |
| popPK | Xu_2019 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic mechanisms (estrogen receptor pathway) and incompatibility, not pharmacokinetic parameters. |
| PD | Xu_2019 | not_relevant | 2 | 1 | The paper describes qualitative pharmacodynamic interactions (antagonism of estrogenic effects) but does not provide numeric concentration-effect curves, dose-response parameters (Emax, EC50), or PK/PD modeling data. |
| popPK | Yuan_2023 | irrelevant | 0 | 0 | The paper is a phytochemical and in-vitro pharmacological study on steroidal alkaloids from Veratrum roots, reporting no pharmacokinetic parameters. |
| popPK | Zhao_2024 | irrelevant | 2 | 0 | This is a comprehensive review that discusses pharmacokinetics qualitatively (e.g., bioavailability, enterohepatic circulation) but does not provide quantitative disposition parameters or original numeric values. |
| popPK | Zhou_2001 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition assay of stilbenoids from Veratrum taliense, not a pharmacokinetic study of the drug veratrum. |
| popPK | Zhou_2023 | irrelevant | 0 | 0 | The study focuses on pharmacodynamics (antihypertensive activity) and metabolomics, not pharmacokinetic parameters. |
| PD | Zhou_2023 | not_relevant | 2 | 1 | The paper reports qualitative hypotensive effects and metabolomic biomarkers but does not provide numeric concentration-effect or dose-response parameters (e.g., Emax, EC50) or a formal PK/PD model. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
