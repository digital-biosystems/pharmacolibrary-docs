<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H05B&quot;,&quot;href&quot;:&quot;atc/H05B.md&quot;},{&quot;label&quot;:&quot;calcitonin (salmon synthetic)&quot;}]"></div>

# calcitonin (salmon synthetic)

- **generic name:** calcitonin (salmon synthetic)
- **ATC codes:** `H05BA01`
- **DrugBank:** [DB00017](https://go.drugbank.com/drugs/DB00017) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Synthetic salmon calcitonin is a hormone drug used to treat osteoporosis, helping to conserve bone density. It is an approved medicine, given systemically as a calcitonin preparation for calcium homeostasis, though it also has investigational uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20801721](https://www.wikidata.org/wiki/Q20801721) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| calcitonin_salmon_synthetic | metabolite | 3431.89 | C145H240N44O48S2 | PubChem | [16133812](https://pubchem.ncbi.nlm.nih.gov/compound/16133812) | Beveridge_1976, Huwyler_1979 |
| synthetic salmon calcitonin | metabolite | 3431.89 | C145H240N44O48S2 | PubChem | [16220016](https://pubchem.ncbi.nlm.nih.gov/compound/16220016) | Beveridge_1976 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 10:18 | 6:18 | 0/0/2 | 0/0/0 | 0/0/0 | 203,011/5,113 | einfracz / qwen3.8-27b | 7 | 1/6 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Beveridge_1976_reference](drugs/drug_calcitonin_salmon_synthetic/CalcitoninSalmonSynthetic_Beveridge1976_reference.md) | — | 1-compartment (no model) | 2 | Beveridge T et al., Pharmacokinetic study with synthetic sa…, Zeitschrift fur Gastroenter… (1976) | — |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q3 — no SI value to build from</sub><br><sub>route_to: `human_review`</sub> | [Huwyler_1979_reference](drugs/drug_calcitonin_salmon_synthetic/CalcitoninSalmonSynthetic_Huwyler1979_reference.md) | — | 1-compartment (no model) | 2 | Huwyler R et al., Plasma kinetics and urinary excretion o…, The American journal of phy… (1979) | [10.1152/ajpendo.1979.236.1.E15](https://doi.org/10.1152/ajpendo.1979.236.1.E15) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=calcitonin_salmon_synthetic) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skeletal muscle | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | blood | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CALCR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 80 matched, 25 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Beveridge_1976.pdf` | Beveridge T et al., Pharmacokinetic study with synthetic sa…, Zeitschrift fur Gastroenter… (1976) | popPK | 10 | not captured | [64046](https://pubmed.ncbi.nlm.nih.gov/64046) | The paper provides quantitative pharmacokinetic parameters (half-lives, volume of distribution, bioavailability) for synthetic salmon calcitonin in humans directly in the evidence. |
| `Hinchcliffe_2005.pdf` | Hinchcliffe M et al., Effect of chitosan on the intranasal ab…, The Journal of pharmacy and… (2005) | popPK | 9 | [10.1211/0022357056073](https://doi.org/10.1211/0022357056073) | [15969922](https://pubmed.ncbi.nlm.nih.gov/15969922) | The study reports quantitative PK parameters (bioavailability, clearance implied by AUC) for calcitonin in sheep, but specific numeric values for CL or V are not present in the provided text abstract. |
| `Huwyler_1979.pdf` | Huwyler R et al., Plasma kinetics and urinary excretion o…, The American journal of phy… (1979) | popPK | 9 | [10.1152/ajpendo.1979.236.1.E15](https://doi.org/10.1152/ajpendo.1979.236.1.E15) | [571211](https://pubmed.ncbi.nlm.nih.gov/571211) | Reports quantitative metabolic clearance rates (MCR) and half-life comparisons for salmon calcitonin in humans. |
| `Lee_1999.pdf` | Lee KC et al., Preparation and characterization of pol…, Pharmaceutical development… (1999) | popPK | 8 | [10.1081/pdt-100101361](https://doi.org/10.1081/pdt-100101361) | [10231888](https://pubmed.ncbi.nlm.nih.gov/10231888) | The study reports plasma clearance half-lives for PEG-modified salmon calcitonin in rats, providing relevant disposition data for the subject molecule. |
| `Simmons_1988.pdf` | Simmons RE et al., Renal metabolism of calcitonin, The American journal of phy… (1988) | popPK | 5 | [10.1152/ajprenal.1988.254.4.F593](https://doi.org/10.1152/ajprenal.1988.254.4.F593) | [2833122](https://pubmed.ncbi.nlm.nih.gov/2833122) | The study reports quantitative renal clearance values for salmon calcitonin (sCT) and human calcitonin (hCT) in isolated rat kidneys, which are disposition parameters, though limited to renal extraction rather than a full systemic PK model. |
| `Thamsborg_1999.pdf` | Thamsborg G, Effect of nasal salmon calcitonin on ca…, Danish medical bulletin (1999) | popPK | 5 | not captured | [10327295](https://pubmed.ncbi.nlm.nih.gov/10327295) | The abstract describes pharmacokinetic properties (AUC, dose dependence) but does not report specific quantitative disposition parameters like clearance, volume, or half-life values. |

<sub>queue written 2026-10-07T10:17:12.846890+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amer_2025 | irrelevant | 0 | 0 | This is a review article on peptide delivery systems that mentions salmon calcitonin only as an example of a peptide with poor bioavailability, without reporting any specific quantitative PK parameters (CL, V, ka, etc.) for it. |
| popPK | Arrigoni_2021 | irrelevant | 0 | 0 | The study investigates receptor pharmacology and body weight effects in mice, reporting no pharmacokinetic parameters (CL, V, half-life, etc.) for salmon calcitonin. |
| popPK | Brayden_2020 | irrelevant | 1 | 0 | This is a review article that mentions salmon calcitonin only as an example of a peptide that has completed Phase III trials, without reporting specific quantitative pharmacokinetic parameters. |
| popPK | Brossard_1993 | irrelevant | 0 | 0 | This is a clinical case report describing the treatment of hyperparathyroidism with calcitonin, but it does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for the drug. |
| popPK | Clark_1980 | irrelevant | 0 | 0 | The study examines renal clearance and electrolyte excretion in starlings, not the systemic pharmacokinetic parameters (e.g., CL, V, half-life) of calcitonin_salmon_synthetic. |
| popPK | Deganutti_2022 | irrelevant | 0 | 0 | The paper is a structural and mechanistic study of the GLP-1 receptor using agonists like GLP-1 and exendin-4, and does not involve calcitonin_salmon_synthetic or its pharmacokinetics. |
| popPK | EFSA_2024 | irrelevant | 0 | 0 | The paper concerns the risk assessment of polybrominated diphenyl ethers (PBDEs) in food and contains no pharmacokinetic data for calcitonin_salmon_synthetic. |
| popPK | Hinchcliffe_2005 | relevant | 9 | 2 | The study reports quantitative PK parameters (bioavailability, clearance implied by AUC) for calcitonin in sheep, but specific numeric values for CL or V are not present in the provided text abstract. |
| popPK | Kurose_1987 | irrelevant | 4 | 0 | The paper describes qualitative pharmacokinetics (time to max concentration) but does not report specific quantitative PK parameters (CL, V, t1/2, Cmax values) for calcitonin_salmon_synthetic. |
| popPK | Lee_1999 | relevant | 8 | 4 | The study reports plasma clearance half-lives for PEG-modified salmon calcitonin in rats, providing relevant disposition data for the subject molecule. |
| popPK | Ludwig_2026 | irrelevant | 0 | 0 | The paper is a neuroanatomical and transcriptomic study on amylin receptor neurons, not a pharmacokinetic study of calcitonin. |
| popPK | Pun_1987 | irrelevant | 1 | 0 | The study investigates the physiological effect of salmon calcitonin on serum prolactin secretion, not its pharmacokinetic disposition parameters. |
| popPK | Quamme_1980 | irrelevant | 0 | 0 | The study investigates renal electrolyte transport mechanisms and uses clearance as a physiological measurement for tubular function, rather than reporting pharmacokinetic disposition parameters (CL, V, T1/2) for calcitonin. |
| popPK | Sjöberg_1975 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting serum calcium and creatinine changes, containing no pharmacokinetic parameters (CL, V, t1/2, etc.) for calcitonin. |
| popPK | Sommerville_1987 | irrelevant | 0 | 0 | The study investigates renal function (GFR, excretion rates) and plasma calcium homeostasis in chickens, not the pharmacokinetic disposition parameters (CL, V, half-life) of the drug. |
| popPK | Thamsborg_1999 | irrelevant | 5 | 0 | The abstract describes pharmacokinetic properties (AUC, dose dependence) but does not report specific quantitative disposition parameters like clearance, volume, or half-life values. |
| popPK | Vasović_2026 | irrelevant | 0 | 0 | The paper is a narrative review on oral peptide delivery technologies and does not report specific quantitative pharmacokinetic parameters (CL, V, Q, ka) for calcitonin. |
| popPK | Yang_2012 | irrelevant | 2 | 0 | The study focuses on pulmonary distribution and qualitative hypocalcemia effects in rats, without providing specific quantitative PK parameters like clearance or volume for the drug. |
| popPK | Yoo_2000 | irrelevant | 0 | 0 | The provided evidence contains no scientific content, only software metadata. |
| popPK | Zhu_2021 | irrelevant | 0 | 0 | This is a review of oral delivery technologies for peptides; while calcitonin (sCT) is mentioned in a table regarding oral bioavailability percentages, the paper does not report population pharmacokinetic parameters (CL, V, ka, etc.) for calcitonin. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 10:17 UTC</sub>
