<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G01A&quot;,&quot;href&quot;:&quot;atc/G01A.md&quot;},{&quot;label&quot;:&quot;ornidazole&quot;}]"></div>

# ornidazole

- **generic name:** ornidazole
- **ATC codes:** `G01AF06`, `J01RA05`, `J01RA09`, `J01RA12`, `J01RA15`, `J01XD03`, `P01AB03`
- **DrugBank:** [DB13026](https://go.drugbank.com/drugs/DB13026) · **PubChem:** [CID 28061](https://pubchem.ncbi.nlm.nih.gov/compound/28061)
- **molar mass:** 219.63 g/mol (C7H10ClN3O3) — DrugBank
- **groups:** investigational

## About

Ornidazole is a nitroimidazole antimicrobial used against protozoal and anaerobic bacterial infections such as giardiasis, amoebiasis and trichomoniasis. It is considered investigational in major databases and is not authorised in the European Union; it is used mainly in countries outside Europe.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2358146](https://www.wikidata.org/wiki/Q2358146) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| ornidazole | parent | 219.63 | C7H10ClN3O3 | DrugBank | [28061](https://pubchem.ncbi.nlm.nih.gov/compound/28061) | Turcant_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:11 | 0:32 | 0/1/0 | 1/0/0 | 0/0/0 | 19,095/2,120 | einfracz / qwen3.8-27b | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Turcant_1987_reference](drugs/drug_ornidazole/Ornidazole_Turcant1987_reference.md) | — | 1-compartment (no model) | 2 | Turcant A et al., Pharmacokinetics of ornidazole in neona…, European journal of clinica… (1987) | [10.1007/BF00609970](https://doi.org/10.1007/BF00609970) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Guo_2017_MIC](drugs/drug_ornidazole/pd_Guo_2017_MIC.md) | MIC (Minimum Inhibitory Concentration) biomarker turnover ← levornidazole | — | Guo B et al., Clinical Pharmacokinetics of Levornidaz…, Clinical therapeutics (2017) | [10.1016/j.clinthera.2017.05.350](https://doi.org/10.1016/j.clinthera.2017.05.350) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Turcant_1987.pdf` | Turcant A et al., Pharmacokinetics of ornidazole in neona…, European journal of clinica… (1987) | popPK | 10 | [10.1007/BF00609970](https://doi.org/10.1007/BF00609970) | [3582464](https://pubmed.ncbi.nlm.nih.gov/3582464) | The abstract reports quantitative compartmental parameters including half-lives, volume of distribution, and clearance for ornidazole in neonates and infants. |
| `Kumar_2007.pdf` | Kumar YS et al., Effect of rifampicin pretreatment on th…, Drug metabolism and drug in… (2007) | popPK | 9 | [10.1515/dmdi.2007.22.2-3.151](https://doi.org/10.1515/dmdi.2007.22.2-3.151) | [17708065](https://pubmed.ncbi.nlm.nih.gov/17708065) | The study reports ornidazole pharmacokinetics in humans, but the evidence provides only relative percentage changes and lacks the absolute numeric values for parameters like clearance, volume, or half-life. |

<sub>queue written 2026-10-07T08:11:03.313219+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2015 | irrelevant | 1 | 0 | The study is an in-vitro methodological validation using levo-ornidazole as a test drug, and no quantitative population PK parameter values are reported in the provided evidence. |
| popPK | Guo_2017 | irrelevant | 0 | 0 | The study is conducted on levornidazole (the levo-isomer of ornidazole), not ornidazole itself, and ornidazole is mentioned only as a comparator/parent class reference. |
| popPK | Kumar_2007 | relevant | 9 | 4 | The study reports ornidazole pharmacokinetics in humans, but the evidence provides only relative percentage changes and lacks the absolute numeric values for parameters like clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:11 UTC</sub>
