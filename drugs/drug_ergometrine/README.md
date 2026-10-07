<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G02A&quot;,&quot;href&quot;:&quot;atc/G02A.md&quot;},{&quot;label&quot;:&quot;ergometrine&quot;}]"></div>

# ergometrine

- **generic name:** ergometrine
- **ATC codes:** `G02AB03`
- **DrugBank:** [DB01253](https://go.drugbank.com/drugs/DB01253) · **PubChem:** [CID 443884](https://pubchem.ncbi.nlm.nih.gov/compound/443884)
- **molar mass:** 325.4048 g/mol (C19H23N3O2) — DrugBank
- **groups:** approved, investigational

## About

Ergometrine is a uterotonic ergot alkaloid used to prevent and treat excessive bleeding after childbirth. It remains in clinical use and is included on the WHO list of essential medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q424508](https://www.wikidata.org/wiki/Q424508) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:15 | 3:27 | 0/0/0 | 0/0/0 | 0/0/0 | 192,965/2,584 | einfracz / qwen3.8-27b | 6 | 0/4 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=ergometrine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), DRD2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 47 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `de_1994.pdf` | de Groot AN et al., Pharmacokinetics and bioavailability of…, Biopharmaceutics & drug dis… (1994) | popPK | 10 | [10.1002/bdd.2510150106](https://doi.org/10.1002/bdd.2510150106) | [8161717](https://pubmed.ncbi.nlm.nih.gov/8161717) | The paper reports quantitative PK parameters (CL, Vss, half-lives, ka/t1/2abs) for ergometrine in humans, with all numeric values explicitly present in the text. |

<sub>queue written 2026-10-07T08:14:33.660005+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Angus_1982 | not_relevant | 0 | 0 | The paper investigates verapamil's pharmacodynamics in coronary arteries and does not report any genetic variants or genotypes affecting the PK or PD of ergometrine. |
| popPK | Bafor_2011 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamics study on isolated rat uterus examining uterine contractions, not a pharmacokinetic study reporting disposition parameters for ergometrine. |
| PGx | Benacerraf_1982 | not_relevant | 0 | 0 | The paper describes clinical cases of coronary spasm using ergometrine as a diagnostic provocation agent and reports the efficacy of calcium antagonists, but does not study the impact of gene variants on ergometrine pharmacokinetics or pharmacodynamics. |
| popPK | Brazenor_1981 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms in canine coronary arteries, not a pharmacokinetic study of disposition parameters. |
| popPK | Brown_1979 | irrelevant | 0 | 0 | The study characterizes adrenergic receptors in rat sympathetic ganglia using ergometrine as a pharmacological probe, not a pharmacokinetic analysis. |
| popPK | Cocks_1993 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring contractile forces in isolated human coronary arteries, not a pharmacokinetic study. |
| popPK | Crankshaw_2017 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study investigating myometrial contractions, not a pharmacokinetic study, and ergometrine is used only as a comparative uterotonic agent. |
| popPK | Deckert_1992 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor subtypes in rat basilar arteries, using ergometrine as an antagonist probe rather than reporting its pharmacokinetic disposition parameters. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper is a risk assessment opinion regarding animal health and feed exposure to ergot alkaloids, not a pharmacokinetic study reporting quantitative disposition parameters for ergometrine. |
| popPK | Fanning_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ergometrine's effect on myometrial contractions and does not report pharmacokinetic parameters. |
| popPK | Goessens_2024 | irrelevant | 0 | 0 | The paper is a systematic review protocol regarding dietary mycotoxin exposure and human health, with no mention of ergometrine or pharmacokinetic parameters. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | The study focuses on oxytocin for labor induction and outcomes, mentioning ergometrine only as a rescue treatment for hemorrhage without providing any pharmacokinetic parameters for it. |
| popPK | Louie_1985 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of ergometrine's effect on airway smooth muscle contractility in dogs, reporting EC50 values rather than pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Morrison_2016 | irrelevant | 0 | 0 | This is an in vitro pharmacological study evaluating contractile effects on myometrium, not a pharmacokinetic study reporting disposition parameters for ergometrine. |
| PGx | Mulac_2012 | not_relevant | 0 | 0 | The paper investigates the permeability of ergot alkaloids across the blood-brain barrier in an in vitro model without assessing any gene variants or pharmacogenomic effects. |
| popPK | Odum_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring myometrial contraction, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Roon_1999 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study of isolated arteries, not a pharmacokinetic study. |
| popPK | Sakamoto_1989 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of the mechanism of ergonovine-induced airway smooth muscle contraction (receptor affinity, EC50) and does not report pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Weibel_2020 | irrelevant | 0 | 0 | The paper is a network meta-analysis regarding the efficacy of antiemetic drugs for preventing postoperative nausea and vomiting; ergometrine is not mentioned, studied, or reported with pharmacokinetic parameters. |
| popPK | Yonpiam_2021 | irrelevant | 0 | 0 | The study investigates the vasoactive mechanisms of ergot alkaloids (including ergometrine) in sheep tissue baths, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
