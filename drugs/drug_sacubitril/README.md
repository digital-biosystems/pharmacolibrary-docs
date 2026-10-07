<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09D&quot;,&quot;href&quot;:&quot;atc/C09D.md&quot;},{&quot;label&quot;:&quot;Sacubitril&quot;}]"></div>

# Sacubitril

- **generic name:** Sacubitril
- **ATC codes:** `C09DX04`
- **DrugBank:** [DB09292](https://go.drugbank.com/drugs/DB09292) · **PubChem:** [CID 9811834](https://pubchem.ncbi.nlm.nih.gov/compound/9811834)
- **molar mass:** 411.498 g/mol (C24H29NO5) — DrugBank
- **groups:** approved, investigational

## About

Sacubitril is a heart failure medicine, given in combination with the angiotensin receptor blocker valsartan. It is widely used as part of this combination therapy for chronic heart failure in many countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q17811448](https://www.wikidata.org/wiki/Q17811448) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:53 | 8:38 | 0/0/0 | 0/0/0 | 0/0/0 | 223,536/2,502 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 3/10 | 17/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sacubitril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: MME (inhibitor), MME (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 69 matched, 41 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jin_2026.pdf` | Jin Y et al., Population Pharmacokinetics of Sacubitr…, Clinical pharmacokinetics (2026) | popPK | 10 | [10.1007/s40262-026-01647-z](https://doi.org/10.1007/s40262-026-01647-z) | [42053769](https://pubmed.ncbi.nlm.nih.gov/42053769) | The study reports a population PK model for sacubitril's active metabolite (LBQ657) in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only relative covariate effects. |

<sub>queue written 2026-10-07T08:51:06.319620+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Abuzaanona_2017 | not_relevant | 2 | 0 | The text is a review summary that mentions the potential for genetic variants to impact sacubitril PK/PD but does not report specific quantitative effects or fitted parameters. |
| PGx | Bellosta_2018 | not_relevant | 0 | 0 | The paper reviews statin drug interactions and does not mention sacubitril or its pharmacogenomics. |
| popPK | Beltrán_2018 | irrelevant | 0 | 0 | The study evaluates clinical efficacy (6-minute walk test) and does not report any pharmacokinetic parameters for sacubitril. |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy that does not report any quantitative pharmacokinetic parameters for sacubitril. |
| popPK | Chen_2025 | irrelevant | 0 | 0 | The paper is a meta-analysis of clinical trial efficacy endpoints (event rates and 6MWD) for HFpEF, not a pharmacokinetic study, and contains no PK parameters for sacubitril. |
| popPK | Chrysant_2017 | irrelevant | 0 | 0 | The provided text is a narrative review of the mechanism and clinical effects of LCZ-696 without reporting any quantitative pharmacokinetic parameters (CL, V, etc.) for sacubitril. |
| popPK | Dogan_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of oxidative stress and cell viability in H9c2 cardiomyocytes, reporting no pharmacokinetic parameters (CL, V, ka, etc.) for sacubitril. |
| popPK | Gómez-Perales_2021 | irrelevant | 0 | 0 | no_text gate: only 59 chars of text extracted (&lt; 400) |
| popPK | Jin_2026 | relevant | 10 | 2 | The study reports a population PK model for sacubitril's active metabolite (LBQ657) in humans, but specific numeric parameter values (CL, V, etc.) are not present in the provided text, only relative covariate effects. |
| popPK | Kanodia_2020 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of TD-0714, a different neprilysin inhibitor, and only mentions sacubitril as a comparator in the introduction without providing any PK data for it. |
| PGx | Korshunov_2019 | not_relevant | 2 | 5 | The study compares drug efficacy between two inbred mouse strains (genetic background) but does not report a specific gene variant/genotype effect on a pharmacokinetic or pharmacodynamic parameter of sacubitril. |
| PGx | Krittanawong_2017 | not_relevant | 2 | 0 | The paper is a review discussing the theoretical link between NEP polymorphisms and long-term side effects (like Alzheimer's) rather than reporting specific pharmacokinetic or pharmacodynamic parameter changes for sacubitril. |
| popPK | Lava_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of empagliflozin, not sacubitril. |
| popPK | Lu_2024 | irrelevant | 0 | 0 | The paper is a machine learning study on clinical trial approval prediction and does not report pharmacokinetic parameters for sacubitril. |
| PGx | Luo_2023 | not_relevant | 2 | 5 | The study reports an association with clinical efficacy (a composite endpoint) rather than a specific pharmacokinetic or pharmacodynamic parameter. |
| popPK | Morrison_2026 | irrelevant | 0 | 0 | The study characterizes hemodynamic and oximetric physiological responses (blood pressure, heart rate, oxygenation) rather than pharmacokinetic disposition parameters (clearance, volume, half-life). |
| popPK | Nagahiro_2026 | irrelevant | 0 | 0 | The study reports hemodynamic outcomes (blood pressure changes) in heart failure patients, not pharmacokinetic parameters for sacubitril. |
| popPK | Namikawa_2026 | irrelevant | 0 | 0 | The study reports clinical outcomes (eGFR slope and blood pressure) rather than pharmacokinetic parameters for sacubitril. |
| popPK | Nederend_2023 | irrelevant | 0 | 0 | The study is a clinical trial assessing the efficacy and tolerability of sacubitril/valsartan in systemic right ventricle failure, reporting clinical outcomes (6MWT, NT-proBNP, echo) rather than pharmacokinetic parameters. |
| popPK | Neijenhuis_2025 | irrelevant | 0 | 0 | The study evaluates quality of life outcomes in heart failure patients and does not report any pharmacokinetic parameters for sacubitril. |
| popPK | Ruehs_2021 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for vericiguat, not sacubitril. |
| popPK | Steichert_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of enalapril/enalaprilat, not sacubitril. |
| PGx | Tang_2026 | not_relevant | 0 | 0 | The paper reports a case of drug-induced psoriasis (an adverse event) and mentions HLA-Cw*0602 as a general risk factor for psoriasis, but it does not report a pharmacogenomic effect on the pharmacokinetic or pharmacodynamic parameters of sacubitril. |
| PGx | Trujillo_2023 | not_relevant | 0 | 0 | The paper discusses vericiguat and mentions sacubitril/valsartan only to state there are no clinically relevant pharmacokinetic or pharmacodynamic interactions; it does not report any pharmacogenomic effects on sacubitril. |
| PGx | Wang_2017 | not_relevant | 5 | 2 | The paper reports in vitro/in vivo functional impairment of CES1 activity on sacubitril metabolism by specific variants, but does not report fitted pharmacokinetic or pharmacodynamic parameter changes in humans. |
| PGx | Wang_2025 | not_relevant | 0 | 0 | The paper focuses on the pharmacogenomics of remimazolam, mentioning sacubitril only as a substrate in drug-drug interaction studies, not as the primary drug of interest. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
