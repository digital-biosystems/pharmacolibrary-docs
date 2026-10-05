<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10A&quot;,&quot;href&quot;:&quot;atc/A10A.md&quot;},{&quot;label&quot;:&quot;insulin (beef)&quot;}]"></div>

# insulin (beef)

- **generic name:** insulin (beef)
- **ATC codes:** `A10AB02`, `A10AC02`, `A10AD02`, `A10AE02`
- **DrugBank:** [DB09456](https://go.drugbank.com/drugs/DB09456) · **PubChem:** not captured
- **groups:** approved

## About

Beef (bovine) insulin is an insulin product used to treat diabetes mellitus. It is an approved insulin, though largely replaced by human and analogue insulins in modern practice.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 21:53 | 3:00 | 0/0/0 | 0/0/0 | 0/0/0 | 85,801/2,870 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/7 | 10/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=insulin_beef) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP1A2` inducer | DrugBank actor |

<sub>Actors without a tissue in the table: IDE (substrate), IGF1R (activator), INSR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 45 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ince_1983.pdf` | Ince BW, Effects of temperature and dose level o…, General and comparative end… (1983) | popPK | 9 | [10.1016/0016-6480(83)90141-7](https://doi.org/10.1016/0016-6480(83)90141-7) | [6341164](https://pubmed.ncbi.nlm.nih.gov/6341164) | The study reports quantitative PK parameters (MCR, Vdist) for bovine insulin in eels, but the specific numeric values are not present in the provided abstract text. |
| `Gray_1984.pdf` | Gray RS et al., A comparison of the biological actions…, Diabete & metabolisme (1984) | popPK | 8 | not captured | [6386558](https://pubmed.ncbi.nlm.nih.gov/6386558) | The study reports pharmacokinetic parameters (metabolic clearance rates) for beef insulin in humans, but the specific numeric values are not present in the provided text. |
| `Gray_1985.pdf` | Gray RS et al., Influence of insulin antibodies on phar…, British medical journal (Cl… (1985) | popPK | 8 | [10.1136/bmj.290.6483.1687](https://doi.org/10.1136/bmj.290.6483.1687) | [3924216](https://pubmed.ncbi.nlm.nih.gov/3924216) | The study reports pharmacokinetic parameters (clearance, distribution space, half-life) for beef insulin in humans, but the specific numeric values are not present in the provided abstract text. |

<sub>queue written 2026-10-04T21:53:26.761306+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alassaf_2023 | irrelevant | 0 | 0 | The paper is a mechanistic study on glial insulin resistance and phagocytic clearance in Drosophila, not a pharmacokinetic study of insulin_beef. |
| popPK | Bergman_2022 | irrelevant | 2 | 1 | The paper is a review of insulin clearance physiology and diabetes risk, not a PK study of the specific drug formulation insulin_beef, and lacks specific compartmental PK parameters (CL, V, ka) for that drug. |
| popPK | Binder_1984 | irrelevant | 0 | 0 | The paper is a general review of insulin pharmacokinetics without specific quantitative parameters for insulin_beef. |
| popPK | Bosello_1990 | irrelevant | 0 | 0 | The study measures hepatic insulin clearance in humans using endogenous insulin (via C-peptide ratio) in the context of diet, not the pharmacokinetics of the specific drug formulation insulin_beef. |
| popPK | Chung_2014 | irrelevant | 0 | 0 | The study focuses on an insulin-like molecule in blue crabs and uses bovine insulin only as a physiological probe, not as the subject of a pharmacokinetic analysis. |
| popPK | Cockram_1985 | irrelevant | 2 | 2 | The study focuses on chemically modified analogs (pheA14 and pheA19) rather than native insulin_beef, and the reported clearance/half-life data are for these analogs, not the subject drug. |
| popPK | Cockram_1987 | irrelevant | 2 | 2 | The study reports pharmacokinetic parameters (MCR, half-life, distribution space) for insulin analogues (despentapeptide and deshexapeptide) in dogs, with native beef insulin serving only as a comparator/reference standard rather than the primary subject of a new PK model. |
| popPK | Deck_2017 | irrelevant | 0 | 0 | The study investigates glucose transporter expression and glucose homeostasis in fish, not the pharmacokinetic parameters (CL, V, etc.) of insulin_beef. |
| popPK | Dyer_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of quinine, not insulin_beef. |
| popPK | Grasso_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of proteolytic fragments using mass spectrometry and does not report pharmacokinetic parameters. |
| popPK | Gray_1984 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (metabolic clearance rates) for beef insulin in humans, but the specific numeric values are not present in the provided text. |
| popPK | Gray_1985 | relevant | 8 | 2 | The study reports pharmacokinetic parameters (clearance, distribution space, half-life) for beef insulin in humans, but the specific numeric values are not present in the provided abstract text. |
| popPK | Home_1983 | irrelevant | 2 | 0 | The study compares human, porcine, and bovine insulin, but does not report specific quantitative PK parameters (CL, V, ka) for beef insulin, only stating it was similar to other preparations. |
| popPK | Huber_2020 | irrelevant | 1 | 1 | The study measures whole-body insulin clearance in humans using endogenous insulin, not the pharmacokinetics of the specific drug formulation insulin_beef. |
| popPK | Ince_1982 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| popPK | Ince_1983 | relevant | 9 | 2 | The study reports quantitative PK parameters (MCR, Vdist) for bovine insulin in eels, but the specific numeric values are not present in the provided abstract text. |
| popPK | Kaplan_2025 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for veligrotug (an anti-IGF-1R antibody), not insulin_beef. |
| popPK | Kulesh_2022 | irrelevant | 0 | 0 | The study focuses on insulin aspart, not insulin_beef. |
| popPK | Lahtela_1986 | irrelevant | 0 | 0 | The study investigates insulin-mediated glucose metabolism (M) and clearance of glucose/antipyrine, not the pharmacokinetic disposition parameters (CL, V, t1/2) of the drug insulin itself. |
| popPK | Larkins_1983 | irrelevant | 0 | 0 | The paper is a review discussing the synthesis and immunogenicity of human insulin compared to animal insulins, without reporting any quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of a novel oral cyclic peptide (COX52-69), not insulin_beef. |
| popPK | Mansell_2017 | irrelevant | 0 | 0 | The study evaluates pharmacokinetic models for insulin aspart, not insulin_beef. |
| popPK | Marmentini_2021 | irrelevant | 2 | 0 | The study measures insulin clearance in mice using the c-peptide:insulin ratio as a proxy for hepatic clearance, but does not report quantitative pharmacokinetic parameters (CL, V, ka) for the specific drug insulin_beef. |
| popPK | McCall_2007 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of creatine, not insulin_beef. |
| popPK | McCarthy_1978 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of fructose and glucose, not insulin_beef. |
| popPK | McHugh_2022 | irrelevant | 2 | 2 | The study focuses on the identifiability of hepatic clearance parameters in a model-based metabolic test rather than reporting standard population PK parameters (CL, V, t1/2) for insulin_beef as a therapeutic drug, and the specific drug formulation (beef) is not specified. |
| popPK | McNeff_1999 | irrelevant | 0 | 0 | The paper describes a chromatographic purification method for removing endotoxins from insulin, not a pharmacokinetic study of insulin disposition. |
| popPK | Meijer_2021 | irrelevant | 2 | 8 | The study measures insulin clearance in rats, but the drug is generic insulin (likely porcine or recombinant), not specifically insulin_beef, and it reports tissue-specific clearance rates rather than a population PK model for the specific drug entity. |
| popPK | Najjar_2019 | irrelevant | 0 | 0 | The paper is a review of the mechanisms of hepatic insulin clearance and does not report quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Nishimura_2021 | irrelevant | 0 | 0 | The study investigates insulin icodec, not insulin_beef. |
| popPK | Petrov_2022 | irrelevant | 0 | 0 | The study focuses on biphasic insulin aspart 30, not insulin_beef. |
| popPK | Piccinini_2020 | irrelevant | 1 | 0 | The paper is a review of methods for measuring insulin clearance and does not report original quantitative pharmacokinetic parameters for insulin_beef. |
| popPK | Pontiroli_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of glucagon, not insulin_beef. |
| popPK | Ramakrishnan_2016 | irrelevant | 0 | 0 | The study investigates the mechanism of insulin clearance regulation by fenofibrate in mice and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for insulin_beef. |
| popPK | Ramezani_2021 | irrelevant | 0 | 0 | The study investigates the inhibition of amyloid fibrillation of bovine insulin by propolis nanosheets in vitro, not the pharmacokinetic disposition of insulin. |
| popPK | Renauld_2003 | irrelevant | 2 | 0 | The study measures insulin pharmacokinetic parameters (clearance, distribution space) in dogs, but the subject drug is insulin_beef, whereas the paper uses bovine insulin (which is distinct from beef insulin in specific PK contexts, though often grouped, the primary focus is on the effect of FSH/LH on insulin response rather than characterizing beef insulin PK specifically, and no numeric values are provided in the text). |
| popPK | Reske-Kunz_1984 | irrelevant | 0 | 0 | The paper studies immunology (IL-2 receptor dynamics on T cells) and does not report pharmacokinetic parameters for insulin_beef. |
| popPK | Sambol_1995 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of metformin, not insulin_beef. |
| popPK | Scheidegger_1990 | irrelevant | 0 | 0 | The text is a general discussion/review of factors influencing insulin pharmacokinetics without reporting specific quantitative parameters for insulin_beef. |
| popPK | Siddik_1987 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of carboplatin and cisplatin, with insulin mentioned only as a comparator for clearance values. |
| popPK | Sodoyez_1984 | irrelevant | 2 | 0 | The study is a nuclear medicine imaging investigation of insulin biodistribution in immunized patients, reporting qualitative organ activity profiles rather than quantitative compartmental pharmacokinetic parameters (CL, V, ka). |
| popPK | Su_2022 | irrelevant | 0 | 0 | The study investigates insulin-like peptides in shrimp and uses bovine insulin only as a functional probe for glucose homeostasis, without reporting pharmacokinetic parameters for insulin_beef. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The study focuses on a computational model for a novel glucose-responsive insulin (MK-2640) and regular human insulin, not insulin_beef. |
| popPK | Yang_2025 | irrelevant | 0 | 0 | The paper is a narrative review of real-world evidence regarding adherence and cost-effectiveness, containing no pharmacokinetic parameters or quantitative disposition data for insulin_beef. |
| PD | Yang_2025 | not_relevant | 1 | 0 | The paper is a narrative review on real-world evidence, adherence, and cost-effectiveness of insulin and biosimilars; it does not report any pharmacokinetic or pharmacodynamic modeling, concentration-effect data, or numeric PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
