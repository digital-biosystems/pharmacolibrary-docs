<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A02B&quot;,&quot;href&quot;:&quot;atc/A02B.md&quot;},{&quot;label&quot;:&quot;gefarnate&quot;}]"></div>

# gefarnate

- **generic name:** gefarnate
- **ATC codes:** `A02BX07`
- **DrugBank:** [DB12079](https://go.drugbank.com/drugs/DB12079) · **PubChem:** [CID 5282182](https://pubchem.ncbi.nlm.nih.gov/compound/5282182)
- **molar mass:** 400.647 g/mol (C27H44O2) — DrugBank
- **groups:** investigational

## About

**Description.** Gefarnate has been investigated for the treatment and prevention of Stomach Ulcer, Duodenal Ulcer, and Cardio-cerebrovascular Disease.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 09:29 | 0:53 | 0/0/0 | 0/0/0 | 0/0/0 | 26,613/1,263 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 3 matched, 21 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_1980 | irrelevant | 0 | 0 | The study measures gastric mucosal blood flow in dogs and rabbits, and gefarnate is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Akhtar_1989 | irrelevant | 0 | 0 | The study evaluates the antiulcerogenic effects of plant extracts in rats, using gefarnate only as a reference drug for comparison, with no pharmacokinetic parameters reported. |
| popPK | Bianchi_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy review of famotidine where gefarnate is only mentioned as a comparator drug, with no pharmacokinetic parameters reported. |
| PD | Bianchi_1985 | not_relevant | 0 | 0 | The text is a clinical overview of famotidine that only qualitatively mentions gefarnate as an inferior comparator in ulcer trials, without reporting any pharmacodynamic, exposure-response, or dose-response data or numeric PD parameters for gefarnate. |
| popPK | Carmine_1985 | irrelevant | 0 | 0 | The paper is a review of pirenzepine where gefarnate is only mentioned as a comparator drug for efficacy, with no pharmacokinetic parameters reported for gefarnate. |
| PD | Carmine_1985 | not_relevant | 1 | 0 | The text is a review of pirenzepine that only qualitatively compares its efficacy to gefarnate without providing any numeric PD parameters or exposure-response data for gefarnate. |
| popPK | Ichimaru_1987 | irrelevant | 0 | 0 | The study is a pharmacodynamic screening for anti-ulcer effects in mice and does not report any pharmacokinetic parameters for gefarnate. |
| popPK | Ishimori_1979 | irrelevant | 0 | 0 | The study is a clinical efficacy trial for cetraxate where gefarnate is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Ishimori_1982 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the therapeutic efficacy of pirenzepine versus gefarnate for gastric ulcers, containing no pharmacokinetic data. |
| popPK | Ishimori_1986 | irrelevant | 0 | 0 | The study is a clinical trial comparing therapeutic efficacy for duodenal ulcers where gefarnate is used only as a control drug, with no pharmacokinetic parameters reported. |
| popPK | Kimura_1984 | irrelevant | 0 | 0 | The study focuses on the histological anti-ulcer effects of sofalcone in rats, with gefarnate serving only as a comparator drug and no pharmacokinetic parameters reported. |
| popPK | Koga_1996 | irrelevant | 0 | 0 | The study investigates the antibacterial activity of plaunotol against H. pylori, with gefarnate serving only as a comparator agent in MIC assays, and no pharmacokinetic parameters are reported. |
| popPK | Murakami_1981 | irrelevant | 0 | 0 | The study focuses on the antiulcer effects of geranylgeranylacetone (GGA) in rats, with gefarnate serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Murakami_1982 | irrelevant | 0 | 0 | The study is a pharmacological investigation of antiulcer effects in rats where gefarnate is used only as a comparator drug, with no pharmacokinetic parameters reported. |
| popPK | Nishioka_1988 | irrelevant | 0 | 0 | The paper describes the chemical synthesis of radioactive gefarnate for metabolic studies and does not report any pharmacokinetic parameters. |
| popPK | Niwa_1991 | irrelevant | 0 | 0 | The study is a clinical trial evaluating gastric ulcer healing using endoscopic ultrasonography and does not report any pharmacokinetic parameters for gefarnate. |
| popPK | Okabe_1981 | irrelevant | 0 | 0 | The study focuses on the pharmacological effects of CL-1700 on gastric lesions in rats, with gefarnate serving only as a comparator drug without any pharmacokinetic parameter reporting. |
| popPK | Peral_2008 | irrelevant | 0 | 0 | The paper is a review of therapeutic targets in dry eye syndrome and mentions gefarnate only as a therapeutic agent without reporting any pharmacokinetic parameters. |
| popPK | Reynolds_1988 | irrelevant | 0 | 0 | The paper is a review of famotidine efficacy in duodenal ulcer, where gefarnate is only a comparator drug, and no pharmacokinetic parameters are reported. |
| popPK | Sakaki_2013 | irrelevant | 0 | 0 | The study is a clinical trial comparing the endoscopic features of ulcers induced by aspirin during prophylaxis with lansoprazole versus gefarnate, and contains no pharmacokinetic data. |
| popPK | Sugano_2014 | irrelevant | 0 | 0 | Gefarnate is only a concomitant mucosal protection agent in a clinical trial for esomeprazole, with no pharmacokinetic parameters reported. |
| popPK | Suzuki_1979 | irrelevant | 0 | 0 | The study investigates the mechanism of action of cetraxate on ulcer healing, using gefarnate only as a comparator agent without reporting any pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
