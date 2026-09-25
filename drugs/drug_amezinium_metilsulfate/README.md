<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01C&quot;,&quot;href&quot;:&quot;atc/C01C.md&quot;},{&quot;label&quot;:&quot;amezinium metilsulfate&quot;}]"></div>

# amezinium metilsulfate

- **generic name:** amezinium metilsulfate
- **ATC codes:** `C01CA25`
- **DrugBank:** [DB13330](https://go.drugbank.com/drugs/DB13330)
- **groups:** experimental

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-20 16:23 | 3:33 | 0/0/0 | 0/0/0 | 0/0/0 | 54,578/3,256 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 20 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kaumeier_1981.pdf` | Kaumeier S et al., Absolute bioavailability of amezinium.…, Arzneimittel-Forschung (1981) | popPK | 10 | not captured | [7197980](https://pubmed.ncbi.nlm.nih.gov/7197980) | The study reports quantitative pharmacokinetic parameters including half-lives, volume of distribution, and bioavailability for amezinium metilsulfate. |
| `Traut_1981.pdf` | Traut M et al., Pharmacokinetics of amezinium in man, Arzneimittel-Forschung (1981) | popPK | 10 | not captured | [7197975](https://pubmed.ncbi.nlm.nih.gov/7197975) | The paper reports quantitative pharmacokinetic parameters for amezinium metilsulfate, including bioavailability, volume of distribution, and half-life, directly in the text. |
| `Brode_1983.pdf` | Brode E et al., The pharmacokinetics of ameziniummetils…, Arzneimittel-Forschung (1983) | popPK | 9 | not captured | [6686052](https://pubmed.ncbi.nlm.nih.gov/6686052) | The paper reports quantitative pharmacokinetic parameters (half-lives for absorption, distribution, and elimination) for amezinium metilsulfate in humans, but specific values for clearance (CL) or volume of distribution (V) are not explicitly listed in the provided text. |
| `Traut_1981_2.pdf` | Traut M et al., Pharmacokinetics of amezinium in rat an…, Arzneimittel-Forschung (1981) | popPK | 9 | not captured | [7197974](https://pubmed.ncbi.nlm.nih.gov/7197974) | The paper reports quantitative pharmacokinetic parameters (absorption half-lives, terminal half-lives, tissue distribution ratios) for amezinium metilsulfate in rats and dogs, with specific numeric values provided in the text. |
| `Nambu_1988.pdf` | Nambu K et al., Disposition and metabolism of [14C]-ame…, Arzneimittel-Forschung (1988) | popPK | 8 | not captured | [3207436](https://pubmed.ncbi.nlm.nih.gov/3207436) | The study reports quantitative PK parameters (Cmax, tmax, t1/2) for amezinium metilsulfate in rats, but lacks explicit clearance or volume of distribution values. |

<sub>queue written 2026-09-20T16:23:03.043416+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Araújo_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of amezinium methylsulphate on dog saphenous vein strips and does not report pharmacokinetic parameters. |
| popPK | Freistühler_1992 | irrelevant | 0 | 0 | The paper is a clinical case report on Shy-Drager syndrome where amezinium methylsulfate is used as a symptomatic treatment, with no pharmacokinetic parameters reported. |
| popPK | Harada_1998 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of vasoconstrictor responses and does not report quantitative pharmacokinetic parameters (CL, V, ka, etc.) for amezinium metilsulfate. |
| popPK | Ishigooka_1999 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic evaluation of bladder contractility and does not report any pharmacokinetic parameters. |
| popPK | Kita_1988 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting blood pressure and heart rate changes, not a pharmacokinetic study with quantitative disposition parameters. |
| popPK | Majewski_1982 | irrelevant | 0 | 0 | The study focuses on noradrenaline pharmacokinetics in rabbits, with amezinium used only as a comparator agent to affect clearance, not as the subject drug for PK parameter extraction. |
| popPK | Neugebauer_1983 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects and plasma concentrations but does not provide quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Paiva_1984 | irrelevant | 0 | 0 | The study focuses on the metabolism of 5-hydroxytryptamine in isolated dog veins, using amezinium only as a pharmacological agent to inhibit metabolism, rather than as the subject drug for PK parameter estimation. |
| popPK | Reicheneder_1981 | irrelevant | 0 | 0 | The paper describes the synthesis and radioactive labeling of the drug, not a pharmacokinetic study with quantitative disposition parameters. |
| popPK | Starke_1981 | irrelevant | 0 | 0 | The paper studies noradrenaline metabolism in guinea-pig atria and uses amezinium only as a tool compound to block uptake, not as the subject of pharmacokinetic analysis. |
| popPK | Traut_1981_3 | irrelevant | 2 | 0 | The paper focuses on qualitative and quantitative metabolism (excretion of unchanged drug vs. metabolites) rather than reporting quantitative pharmacokinetic disposition parameters like clearance, volume of distribution, or half-life. |
| popPK | Wilsmann_1981 | irrelevant | 2 | 0 | The study focuses on hemodynamic and pharmacodynamic effects (blood pressure, heart rate) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Zumstein_1981 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of dopamine metabolism in rabbit brain slices, not a pharmacokinetic study of amezinium metilsulfate. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
