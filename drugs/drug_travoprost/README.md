<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;travoprost&quot;}]"></div>

# travoprost

- **generic name:** travoprost
- **ATC codes:** `S01EE04`
- **DrugBank:** [DB00287](https://go.drugbank.com/drugs/DB00287) · **PubChem:** [CID 5282226](https://pubchem.ncbi.nlm.nih.gov/compound/5282226)
- **molar mass:** 500.5477 g/mol (C26H35F3O6) — DrugBank
- **groups:** approved, investigational

## About

Travoprost is a prostaglandin analogue eye medicine used to lower pressure in the eye in glaucoma, especially open-angle glaucoma, and ocular hypertension. It is approved and widely used, with products authorised in the European Union for these eye conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2193376](https://www.wikidata.org/wiki/Q2193376) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:36 | 2:42 | 0/0/0 | 1/0/3 | 0/0/0 | 120,883/3,918 | einfracz / qwen3.8-27b | 5 | 0/3 | 5/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sharif_2003_PI_turnover](drugs/drug_travoprost/pd_Sharif_2003_PI_turnover.md) | phosphoinositide turnover ← Travoprost acid · direct sigmoid Emax (Hill) effect | — | Sharif NA et al., Ocular hypotensive FP prostaglandin (PG…, Journal of ocular pharmacol… (2003) | [10.1089/108076803322660422](https://doi.org/10.1089/108076803322660422) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (monkey), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">monkey</span> | [Bastia_2021_IOP_2](drugs/drug_travoprost/pd_Bastia_2021_IOP_2.md) | intraocular pressure biomarker turnover ← travoprost | — | Bastia E et al., NCX 1741, a Novel Nitric Oxide-Donating…, Journal of ocular pharmacol… (2021) | [10.1089/jop.2020.0126](https://doi.org/10.1089/jop.2020.0126) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Raber_2015_IOP](drugs/drug_travoprost/pd_Raber_2015_IOP.md) | IOP reduction ← travoprost · direct Emax (saturable) effect | — | Raber S et al., A model-based dose-response meta-analys…, Journal of ocular pharmacol… (2015) | [10.1089/jop.2014.0106](https://doi.org/10.1089/jop.2014.0106) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Raber_2015_hyperemia](drugs/drug_travoprost/pd_Raber_2015_hyperemia.md) | incidence of hyperemia ← travoprost · direct Emax (saturable) effect | — | Raber S et al., A model-based dose-response meta-analys…, Journal of ocular pharmacol… (2015) | [10.1089/jop.2014.0106](https://doi.org/10.1089/jop.2014.0106) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Sharif_2002_PI_turnover](drugs/drug_travoprost/pd_Sharif_2002_PI_turnover.md) | phosphoinositide (PI) turnover biomarker turnover ← travoprost | — | Sharif NA et al., Agonist activity of bimatoprost, travop…, Journal of ocular pharmacol… (2002) | [10.1089/10807680260218489](https://doi.org/10.1089/10807680260218489) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=travoprost) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: PTGFR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kelly_2003.pdf` | Kelly CR et al., Real-time intracellular Ca2+ mobilizati…, The Journal of pharmacology… (2003) | pd | 4 | [10.1124/jpet.102.042556](https://doi.org/10.1124/jpet.102.042556) | [12490597](https://www.ncbi.nlm.nih.gov/pubmed/12490597) | metadata signals extractable PD data (EC50) |
| `Sharif_2002.pdf` | Sharif NA et al., Agonist activity of bimatoprost, travop…, Journal of ocular pharmacol… (2002) | pd | 4 | [10.1089/10807680260218489](https://doi.org/10.1089/10807680260218489) | [12222762](https://www.ncbi.nlm.nih.gov/pubmed/12222762) | metadata signals extractable PD data (EC50) |
| `Sharif_2003.pdf` | Sharif NA et al., Ocular hypotensive FP prostaglandin (PG…, Journal of ocular pharmacol… (2003) | pd | 4 | [10.1089/108076803322660422](https://doi.org/10.1089/108076803322660422) | [14733708](https://www.ncbi.nlm.nih.gov/pubmed/14733708) | metadata signals extractable PD data (EC50) |
| `Yamane_2015.pdf` | Yamane S et al., IOP-Lowering Effect of ONO-9054, A Nove…, Investigative ophthalmology… (2015) | pd | 4 | [10.1167/iovs.14-16181](https://doi.org/10.1167/iovs.14-16181) | [25788650](https://www.ncbi.nlm.nih.gov/pubmed/25788650) | metadata signals extractable PD data (EC50) |
| `Çalışkan_2022.pdf` | Çalışkan B et al., Ophthalmic drugs: in vitro paraoxonase…, Biotechnology and applied b… (2022) | pd | 4 | [10.1002/bab.2284](https://doi.org/10.1002/bab.2284) | [34786760](https://www.ncbi.nlm.nih.gov/pubmed/34786760) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T19:35:52.814776+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bastia_2021 | irrelevant | 0 | 0 | Travoprost is used only as a positive comparator for intraocular pressure (IOP) efficacy, and no pharmacokinetic parameters (CL, V, t1/2) are reported for it. |
| popPK | Cardozo_2010 | irrelevant | 0 | 0 | The paper focuses on the dose-response modeling of fesoterodine, not travoprost, and contains no pharmacokinetic data for travoprost. |
| popPK | Ismail_2020 | irrelevant | 2 | 0 | The study reports pharmacokinetic improvements (Cmax, AUC) for a formulation but lacks specific quantitative disposition parameters (CL, V, ka) and the numeric values are not present in the provided evidence. |
| popPK | Kelly_2003 | irrelevant | 0 | 0 | This is a pharmacodynamic study measuring intracellular calcium mobilization and receptor binding affinity (EC50/Ki) for travoprost, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Lu_2026 | irrelevant | 0 | 0 | The paper is an in silico toxicology study using machine learning to predict ocular toxicity of PGF2α analogs, reporting no pharmacokinetic parameters for travoprost. |
| popPK | Mackay_2012 | irrelevant | 1 | 0 | The study reports pharmacodynamic effects (intraocular pressure and pupil size) but contains no pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Raber_2015 | irrelevant | 0 | 0 | The paper is a pharmacodynamic dose-response meta-analysis focused on IOP reduction and safety, not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Romano_2007 | irrelevant | 0 | 0 | This is an in-vitro pharmacodynamic study measuring muscle contractions, not a pharmacokinetic study reporting disposition parameters for travoprost. |
| popPK | Sharif_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assay measuring receptor agonist potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sharif_2003 | irrelevant | 0 | 0 | The paper reports in vitro receptor binding affinities and agonist potencies, not pharmacokinetic disposition parameters. |
| popPK | Sharif_2003_2 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study reporting pharmacodynamic parameters (EC50, Ki) in ciliary muscle cells, not pharmacokinetic disposition parameters. |
| popPK | Sharif_2003_3 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study measuring receptor agonist potency (EC50) in human trabecular meshwork cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sharif_2003_4 | irrelevant | 0 | 0 | The paper is an in-vitro receptor pharmacology study of bimatoprost using travoprost only as a radioligand, and it does not report pharmacokinetic parameters. |
| popPK | Sharif_2008 | irrelevant | 0 | 0 | The study is a pharmacodynamic receptor assay measuring potency (EC50) and maximal response, not pharmacokinetic disposition parameters. |
| popPK | Sharif_2008_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring receptor binding/contraction (EC50, Ki), not pharmacokinetic disposition parameters (CL, V, t1/2, population PK) for travoprost. |
| popPK | Yamane_2015 | irrelevant | 0 | 0 | The study focuses on the IOP-lowering efficacy of ONO-9054 in monkeys, using travoprost only as a comparator for efficacy, and contains no pharmacokinetic data for travoprost. |
| PGx | Zhou_2022 | not_relevant | 2 | 1 | The paper reviews genetic associations with general response to prostaglandin analogs but does not report specific pharmacogenomic effects on PK/PD parameters for travoprost. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
