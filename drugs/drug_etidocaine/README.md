<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N01B&quot;,&quot;href&quot;:&quot;atc/N01B.md&quot;},{&quot;label&quot;:&quot;etidocaine&quot;}]"></div>

# etidocaine

- **generic name:** etidocaine
- **ATC codes:** `N01BB07`
- **DrugBank:** [DB08987](https://go.drugbank.com/drugs/DB08987) · **PubChem:** [CID 37497](https://pubchem.ncbi.nlm.nih.gov/compound/37497)
- **molar mass:** 276.417 g/mol (C17H28N2O) — DrugBank
- **groups:** approved

## About

Etidocaine is a local anesthetic of the amide type used to relieve pain by numbing a specific area of the body. It is an approved drug, though it is not widely used today and has largely been replaced by other local anesthetics.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q304782](https://www.wikidata.org/wiki/Q304782) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:35 | 4:22 | 0/0/0 | 1/0/0 | 0/0/0 | 129,576/2,605 | einfracz / qwen3.8-27b | 5 | 0/4 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Weinberg_2000_carnitine_stimulated_pyruvate_oxidation](drugs/drug_etidocaine/pd_Weinberg_2000_carnitine_stimulated_pyruvate_oxidation.md) | carnitine-stimulated pyruvate oxidation ← etidocaine · inhibition effect | — | Weinberg GL et al., Bupivacaine inhibits acylcarnitine exch…, Anesthesiology (2000) | [10.1097/00000542-200002000-00036](https://doi.org/10.1097/00000542-200002000-00036) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 32 matched, 28 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Morgan_1978.pdf` | Morgan D et al., Pharmacokinetics and metabolism of the…, European journal of clinica… (1978) | popPK | 7 | [10.1007/BF00644610](https://doi.org/10.1007/BF00644610) | [668795](https://pubmed.ncbi.nlm.nih.gov/668795) | Reports quantitative elimination half-life for etidocaine in neonates, though detailed compartmental parameters (CL, V) are derived from urinary data without explicit values for CL or Vd provided in the text. |
| `Wiklund_1977.pdf` | Wiklund L et al., Splanchnic elimination and systemic tox…, Acta anaesthesiologica Scan… (1977) | popPK | 5 | [10.1111/j.1399-6576.1977.tb01255.x](https://doi.org/10.1111/j.1399-6576.1977.tb01255.x) | [605767](https://pubmed.ncbi.nlm.nih.gov/605767) | Reports quantitative splanchnic clearance values for etidocaine in humans, but lacks a full compartmental or population-PK model (V, Q, half-life). |
| `Bräu_1998.pdf` | Bräu ME et al., Fundamental properties of local anesthe…, Anesthesia and analgesia (1998) | pd | 4 | [10.1097/00000539-199810000-00026](https://doi.org/10.1097/00000539-199810000-00026) | [9768788](https://www.ncbi.nlm.nih.gov/pubmed/9768788) | metadata signals extractable PD data (IC50) |
| `Woodward_1995.pdf` | Woodward JJ et al., In vitro and in vivo effects of cocaine…, European journal of pharmac… (1995) | pd | 4 | [10.1016/0014-2999(95)00042-j](https://doi.org/10.1016/0014-2999(95)00042-j) | [7635175](https://www.ncbi.nlm.nih.gov/pubmed/7635175) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T04:35:02.422454+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arthur_1988 | relevant | 4 | 2 | The study reports percentage changes in clearance for etidocaine in dogs but does not provide the absolute quantitative pharmacokinetic parameter values (CL, V, etc.) in the text evidence. |
| popPK | Boyes_1975 | irrelevant | 0 | 0 | This is a review article regarding the metabolism of amide local anesthetics and does not provide original quantitative pharmacokinetic parameters (CL, V, etc.) for etidocaine. |
| popPK | Burm_1989 | irrelevant | 2 | 0 | The paper is a review discussing general pharmacokinetic principles of local anesthetics, including etidocaine, but does not report specific quantitative disposition parameters (CL, V, ka) in the provided evidence. |
| popPK | Cuerq_2018 | irrelevant | 0 | 0 | The study investigates vitamin E formulations and does not involve etidocaine. |
| popPK | Jakobson_1980 | irrelevant | 0 | 0 | The study focuses on pulmonary mechanics following nerve blocks and does not report any pharmacokinetic parameters (CL, V, t1/2) for etidocaine. |
| popPK | Langerman_1994 | irrelevant | 1 | 0 | The study measures pharmacodynamic potency (EC50/ED50) of etidocaine in mice rather than quantitative pharmacokinetic disposition parameters. |
| popPK | Lotfi_1997 | irrelevant | 0 | 0 | Etidocaine is used only as an internal standard for the analysis of lidocaine and bupivacaine; no pharmacokinetic parameters for etidocaine are reported. |
| popPK | Naguib_1998 | irrelevant | 0 | 0 | The text is a qualitative review of adverse effects and drug interactions for local anesthetics and does not contain quantitative pharmacokinetic parameters for etidocaine. |
| popPK | Nau_1985 | irrelevant | 1 | 0 | This is a review article discussing placental transfer and general pharmacokinetics of local anesthetics without reporting original quantitative disposition parameters (clearance, volume, half-life) for etidocaine. |
| popPK | Sasikala_2026 | irrelevant | 0 | 0 | The paper is a review on transdermal drug delivery technologies and contains no data or mention of etidocaine. |
| popPK | Sousa_2014 | irrelevant | 0 | 0 | The paper studies the pharmacodynamics of isoflurane in cats using the Cerebral State Index and does not involve etidocaine. |
| popPK | Tao_2025 | irrelevant | 0 | 0 | The paper is an in silico study of Nav1.5 sodium channel binding, not a pharmacokinetic study of etidocaine. |
| popPK | Tiger_1995 | irrelevant | 0 | 0 | The study is an in vitro mechanistic assay of local anesthetics on sodium channels, reporting IC50 values rather than pharmacokinetic disposition parameters for etidocaine. |
| popPK | Tucker_1979 | irrelevant | 2 | 0 | This is a review article discussing the clinical pharmacokinetics of local anesthetics in general terms without reporting specific quantitative parameter values for etidocaine. |
| popPK | Vallée_2025 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of ceftazidime and avibactam in rats and pigs, not etidocaine. |
| popPK | Vanhove_2021 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the drug THR-149 in rabbits, not for etidocaine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
