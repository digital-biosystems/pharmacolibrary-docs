<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11G&quot;,&quot;href&quot;:&quot;atc/A11G.md&quot;},{&quot;label&quot;:&quot;ascorbic acid (vit C)&quot;}]"></div>

# ascorbic acid (vit C)

- **generic name:** ascorbic acid (vit C)
- **ATC codes:** `A11GA01`
- **DrugBank:** not captured · **PubChem:** not captured
- **groups:** not captured

## About

Ascorbic acid (vitamin C) is a vitamin used to treat or prevent vitamin C deficiency (scurvy) and is also commonly taken as a dietary supplement. It is widely available worldwide as an over-the-counter vitamin supplement and in combination vitamin products.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ascorbic_acid_vit_c | metabolite | 176.124 | C6H8O6 | PubChem | [54670067](https://pubchem.ncbi.nlm.nih.gov/compound/54670067) | Löscher_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 07:29 | 2:51 | 0/0/1 | 0/0/0 | 0/0/0 | 46,103/6,464 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.273). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Löscher_1984_reference](drugs/drug_ascorbic_acid_vit_c/AscorbicAcidVitC_Lscher1984_reference.md) | — | 1-compartment (no model) | 2 | Löscher W et al., Pharmacokinetics of ascorbic acid in ho…, Equine veterinary journal (1984) | [10.1111/j.2042-3306.1984.tb01855.x](https://doi.org/10.1111/j.2042-3306.1984.tb01855.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 549 matched, 23 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Löscher_1984.pdf` | Löscher W et al., Pharmacokinetics of ascorbic acid in ho…, Equine veterinary journal (1984) | popPK | 10 | [10.1111/j.2042-3306.1984.tb01855.x](https://doi.org/10.1111/j.2042-3306.1984.tb01855.x) | [6714208](https://pubmed.ncbi.nlm.nih.gov/6714208) | The study reports quantitative PK parameters (Vd, t1/2, bioavailability) for ascorbic acid in horses, with specific values provided in the abstract. |
| `Padayatty_2004.pdf` | Padayatty SJ et al., Vitamin C pharmacokinetics: implication…, Annals of internal medicine (2004) | popPK | 10 | [10.7326/0003-4819-140-7-200404060-00010](https://doi.org/10.7326/0003-4819-140-7-200404060-00010) | [15068981](https://pubmed.ncbi.nlm.nih.gov/15068981) | The paper is a primary pharmacokinetic study of vitamin C in humans, but the specific quantitative disposition parameters (CL, V, ka) are not listed in the provided abstract, only peak concentrations and modeling predictions. |
| `Piotrovskij_1993.pdf` | Piotrovskij VK et al., The use of a nonlinear absorption model…, Biopharmaceutics & drug dis… (1993) | popPK | 9 | [10.1002/bdd.2510140509](https://doi.org/10.1002/bdd.2510140509) | [8218961](https://pubmed.ncbi.nlm.nih.gov/8218961) | The paper describes a two-compartment PK model for ascorbic acid in humans and reports a specific absorption duration (3.2 h), but the primary quantitative parameters (CL, V, Q, ka) are not explicitly listed in the provided evidence. |
| `Dalley_1989.pdf` | Dalley JW et al., Interaction of L-ascorbic acid on the d…, Pharmacology & toxicology (1989) | popPK | 8 | [10.1111/j.1600-0773.1989.tb00665.x](https://doi.org/10.1111/j.1600-0773.1989.tb00665.x) | [2748544](https://pubmed.ncbi.nlm.nih.gov/2748544) | The study reports pharmacokinetic parameters for ascorbic acid in rats, but the specific numeric values are not present in the provided evidence text. |
| `Levine_1996.pdf` | Levine M et al., Vitamin C pharmacokinetics in healthy v…, Proceedings of the National… (1996) | popPK | 8 | [10.1073/pnas.93.8.3704](https://doi.org/10.1073/pnas.93.8.3704) | [8623000](https://pubmed.ncbi.nlm.nih.gov/8623000) | The study reports qualitative pharmacokinetic characteristics (sigmoid kinetics, saturation, bioavailability) and dose-response relationships for vitamin C in humans, but specific numeric PK parameters (CL, V, ka) are not explicitly listed in the provided text. |

<sub>queue written 2026-10-05T07:27:38.387276+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agnieszka_2022 | irrelevant | 0 | 0 | The paper is a systematic review of drug-food interactions in Parkinson's disease, where vitamin C is mentioned only as a dietary supplement affecting levodopa, not as the subject of a PK study. |
| popPK | Carr_2017 | irrelevant | 0 | 0 | The paper is a review of vitamin C's immune functions and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Chen_1998 | irrelevant | 0 | 0 | The study investigates the protective effects of ascorbic acid on nickel-induced lipid peroxidation in mice, not the pharmacokinetic disposition parameters of ascorbic acid. |
| PD | Chen_1998 | not_relevant | 3 | 2 | The paper reports qualitative dose-dependent effects of nickel and protective effects of ascorbic acid on lipid peroxidation, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for ascorbic acid. |
| popPK | Cohen_1997 | irrelevant | 0 | 0 | The study examines social ties and susceptibility to the common cold, with no pharmacokinetic data for ascorbic acid. |
| popPK | Dalley_1989 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for ascorbic acid in rats, but the specific numeric values are not present in the provided evidence text. |
| popPK | Endresen_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of 6-mercaptopurine, with ascorbic acid serving only as a co-administered agent to test for interactions, not as the subject drug. |
| popPK | Kiely_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of amphetamine, with ascorbic acid acting as a co-administered agent/comparator rather than the subject drug. |
| popPK | Levine_1996 | relevant | 8 | 2 | The study reports qualitative pharmacokinetic characteristics (sigmoid kinetics, saturation, bioavailability) and dose-response relationships for vitamin C in humans, but specific numeric PK parameters (CL, V, ka) are not explicitly listed in the provided text. |
| popPK | Lu_2025 | irrelevant | 0 | 0 | The paper describes a vitamin C-functionalized copper nanozyme for treating infections, not the pharmacokinetics of ascorbic acid itself. |
| popPK | Lykkesfeldt_2019 | irrelevant | 2 | 0 | The paper is a review of vitamin C pharmacokinetics that discusses mechanisms and qualitative changes but does not provide specific quantitative parameter values (CL, V, ka) in the provided evidence. |
| popPK | Mitch_1981 | irrelevant | 0 | 0 | The study investigates the effect of ascorbic acid on uric acid excretion and measurement interference, not the pharmacokinetic parameters (CL, V, ka) of ascorbic acid itself. |
| popPK | Moores_2013 | irrelevant | 0 | 0 | The paper is a review of vitamin C's role in wound healing and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for ascorbic acid. |
| popPK | Nelson_1992 | irrelevant | 0 | 0 | The study focuses on metabolic and immune outcomes (body weight, infection clearance) in guinea pigs, not on the pharmacokinetic disposition parameters (CL, V, ka) of ascorbic acid. |
| popPK | Padayatty_2004 | relevant | 10 | 2 | The paper is a primary pharmacokinetic study of vitamin C in humans, but the specific quantitative disposition parameters (CL, V, ka) are not listed in the provided abstract, only peak concentrations and modeling predictions. |
| popPK | Piotrovskij_1993 | relevant | 9 | 2 | The paper describes a two-compartment PK model for ascorbic acid in humans and reports a specific absorption duration (3.2 h), but the primary quantitative parameters (CL, V, Q, ka) are not explicitly listed in the provided evidence. |
| popPK | Shahini_2023 | irrelevant | 0 | 0 | The paper is a review of bowel preparation quality for colonoscopy and does not report pharmacokinetic parameters for ascorbic acid. |
| popPK | Storring_1988 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Luteinizing Hormone (LH) in rats, not ascorbic acid. |
| popPK | Trang_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of caffeine, using vitamin C only as a co-administered agent to test for interactions, rather than reporting PK parameters for vitamin C itself. |
| popPK | Wiesner_2021 | irrelevant | 0 | 0 | The paper is a systematic review of levothyroxine interactions, and ascorbic acid (vitamin C) is only mentioned as a co-administered supplement affecting levothyroxine absorption, not as the subject drug for PK parameter estimation. |
| popPK | Wilson_1976 | irrelevant | 0 | 0 | The study investigates the effect of vitamin C on the pharmacokinetics of antipyrine and diphenylhydantoin, not the pharmacokinetic parameters of vitamin C itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 07:27 UTC</sub>
